import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';

import SignupForm from './components/SignupForm';
import { signup } from './userActions';
import { parseFormErrors } from '../shared/utils/form_errors';

class SignupScreen extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    const { signup, push } = this.props;
    return signup(values)
      .then(() => push('/'))
      .catch(parseFormErrors);
  }

  render() {
    return (
      <section className="section columns is-centered">
        <div className="column is-4">
          <SignupForm onSubmit={this.handleSubmit} />
        </div>
      </section>
    );
  }
}

SignupScreen.propTypes = {
  signup: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
};

export default connect(null, { signup, push })(SignupScreen);
