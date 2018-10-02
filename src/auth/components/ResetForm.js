import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { required, password, confirmation } from '../../shared/utils/form_validations';
import { renderInput } from '../../shared/utils/form_components';

const passwordConfirmation = confirmation('password', "Passwords don\'t match");

const ResetForm = ({ handleSubmit, error, submitting }) => {
  const btnState = submitting ? 'is-loading' : '';

  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="password"
        type="password"
        component={renderInput}
        label="New password"
        placeholder="Password"
        validate={password}
      />
      
      <Field
        name="password_confirmation"
        type="password"
        component={renderInput}
        label="Repeat password"
        placeholder="Confirm password"
        validate={[password, passwordConfirmation]}
      />
      
      <div className="field is-horizontal">
        <div className="field-label"></div>
        <div className="field-body">
          <div className="control">
            <button className={`button ${btnState} is-primary`}>
              Reset
            </button>
            {error && <p className="help is-danger">{error}</p>}
          </div>
        </div>
      </div>
    </form>
  );
}

ResetForm.defaultProps = {
  error: '',
};

ResetForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

export default reduxForm({ form: 'ResetForm' })(ResetForm);
