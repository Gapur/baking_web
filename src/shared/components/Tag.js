import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import { required } from '../utils/form_validations';
import { renderPlainInput } from '../utils/form_components';

const TagFormInline = (props) => {
  const { handleSubmit, error, submitting, onCancelEdit } = props;
  const btnState = submitting ? 'is-loading' : '';
  return (
    <form onSubmit={handleSubmit}>
      <div className="field has-addons">
        <Field
          name="name"
          component={renderPlainInput}
          placeholder="Tag"
          validate={required}
        />
        <div className="control">
          <button className={`button is-success ${btnState}`}>
            Save
          </button>
        </div>
        <div className="control">
          <button onClick={onCancelEdit} className={`button is-warning`}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  )
};

const TagForm = reduxForm()(TagFormInline);

class Tag extends Component {

  render() {
    const { tag, onClick, onUpdate, onCancelEdit, onDelete, isEditing } = this.props;
    const { id, name } = tag;
    return (
      <div className="control">
        {isEditing
          ?
          <TagForm
            form={`TagForm-${id}`}
            onSubmit={onUpdate}
            onCancelEdit={onCancelEdit}
            initialValues={tag}
          />
          :
          <div className="tags has-addons">
            <span className="tag is-info is-medium" onClick={onClick}>
              {name}
            </span>
            <a className="tag is-delete is-medium" onClick={onDelete}></a>
          </div>
        }
      </div>
    );
  }
}

Tag.propTypes = {
  tag: PropTypes.object.isRequired,
  isEditing: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onCancelEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Tag;
