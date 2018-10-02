import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../shared/utils/form_validations';
import { renderInput, renderTextarea } from '../../shared/utils/form_components';

const NoteForm = ({ handleSubmit, error, submitting, invalid, onCancel }) => {
  const btnState = submitting ? 'is-loading' : '';
  
  return (
    <form className="overlay-box" onSubmit={handleSubmit}>
      <h5 className="title">New Note</h5>

      <Field
        name="title"
        component={renderInput}
        layout="vertical"
        label="Title"
        placeholder="Note Title"
      />
      
      <Field
        name="text"
        component={renderTextarea}
        layout="vertical"
        label="Notes"
        placeholder="Write your notes"
      />

      {error && <p className="help is-danger">{error}</p>}

      <div className="field columns bulma-field">
        <div className="control column is-6">
          <button
            disabled={submitting || invalid}
            className={`button is-primary is-fullwidth ${btnState}`}
          >
            Save
          </button>
        </div>

        <div className="control column is-6">
          <button className='button is-fullwidth' onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  )
}

export default reduxForm({ form: 'NoteForm' })(NoteForm);
