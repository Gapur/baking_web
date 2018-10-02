import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { push } from 'react-router-redux';
import ForgotForm from './components/ForgotForm';
import { parseFormErrors } from '../shared/utils/form_errors';

class ForgotPasswordScreen extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    const { push } = this.props;
    return axios.put('/forgot_password', values)
      .then(() => push('/forgot-password/sent'))
      .catch(parseFormErrors);
  }

  render() {
    return (
      <section className="section columns is-centered">
        <ForgotForm onSubmit={this.handleSubmit} />
      </section>
    )
  }
}

export default connect(null, { push })(ForgotPasswordScreen);
