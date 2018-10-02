import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { required, email } from '../../shared/utils/form_validations';
import { renderInput } from '../../shared/utils/form_components';

const ForgotForm = ({ handleSubmit, error, submitting }) => {
  const btnState = submitting ? 'is-loading' : '';
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="email"
        label="Email"
        component={renderInput}
        type="email"
        placeholder="Your email address"
        validate={[required, email]}
      />
      
      <div className="field is-horizontal">
        <div className="field-label"></div>
        <div className="field-body">
          <div className="control">
            <button className={`button ${btnState} is-primary`}>
              Send
            </button>
            {error && <p className="help is-danger">{error}</p>}
          </div>
        </div>
      </div>
    </form>
  );
}

ForgotForm.defaultProps = {
  error: '',
};

ForgotForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

export default reduxForm({ form: 'ForgotForm' })(ForgotForm);
