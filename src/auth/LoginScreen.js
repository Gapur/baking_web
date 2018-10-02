import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import LoginForm from './components/LoginForm';
import { login } from './userActions';
import { parseFormErrors } from '../shared/utils/form_errors';
import ratatuy from '../shared/img/ratatuy.png';

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    const { login, push } = this.props;
    return login(values)
      .then(() => push('/'))
      .catch(parseFormErrors);
  }

  render() {
    return (
      <section className="hero is-fullheight">
        <div className="hero-body columns is-centered">
          <div className="box box-login">
            <article className="media columns is-vcentered">
              <div className="media-left column is-3">
                <figure>
                  <img src={ratatuy} alt="Welcome" height="480" />
                </figure>
              </div>
              <div className="media-content column is-8">
                <LoginForm onSubmit={this.handleSubmit} />
              </div>
            </article>
          </div>
        </div>
      </section>
    );
  }
}

LoginScreen.propTypes = {
  login: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
};

export default connect(null, { login, push })(LoginScreen);
