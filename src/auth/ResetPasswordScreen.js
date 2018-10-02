import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import axios from 'axios';
import ResetForm from './components/ResetForm';
import { parseFormErrors } from '../shared/utils/form_errors';

class ResetPasswordScreen extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    const { push, match: { params }, location: { search } } = this.props;
    const queryParams = new URLSearchParams(search);
    const token = queryParams.get('token');

    return axios.post('/reset_password', { ...values, token })
      .then(() => push('/login'))
      .catch(parseFormErrors);
  }

  render() {
    return (
      <section className="section columns is-centered">
        <ResetForm onSubmit={this.handleSubmit} />
      </section>
    )
  }
}

export default connect(null, { push })(ResetPasswordScreen);
