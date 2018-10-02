import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../shared/utils/form_validations';
import { renderInput, renderTextarea, renderSelect } from '../../shared/utils/form_components';
import { RECIPE_LEVELS } from '../../shared/constants/constants';
import Tag from '../../shared/components/Tag';

class RecipeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editingTagId: null,
      categories: [],
      ingredients: [],
    };
  }
  
  render() {
    const { handleSubmit, error, submitting } = this.props;
    const btnState = submitting ? 'is-loading' : '';
    
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="name"
          component={renderInput}
          layout="vertical"
          label="Recipe Name"
          placeholder="Name"
          validate={required}
        />

        <Field
          name="prep"
          component={renderInput}
          layout="vertical"
          label="Prep"
          placeholder="Prep"
          validate={required}
        />

        <Field
          name="cook"
          component={renderInput}
          layout="vertical"
          label="Cook"
          placeholder="Cook"
          validate={required}
        />

        <Field
          name="level"
          component={renderSelect}
          options={RECIPE_LEVELS}
          layout="vertical"
          label="Cooking level" 
          placeholder="Cook"
          validate={required}
        />

        <Field
          name="categories"
          component={renderInput}
          layout="vertical"
          label="Categories" 
          placeholder="categories"
          validate={required}
        />

        <div className="field">
          <label className="label">Categories</label>
          <div className="control">
            <div className="field is-grouped is-grouped-multiline">
              {this.state.categories.map(category =>
                <Tag
                  key={category}
                  tag={category}
                  isEditing={editingTag == category}
                  onClick={() => this.setState({ editingTag: category })}
                  onUpdate={this.handleUpdate(category)}
                  onCancelEdit={() => this.setState({ editingTag: null })}
                  onDelete={() => deleteTag(category)}
                />
              )}
            </div>
          </div>
        </div>


        <Field
          name="ingredients"
          component={renderInput}
          layout="vertical"
          label="Ingredients" 
          placeholder="ingredients"
          validate={required}
        />

        <Field
          name="methods"
          component={renderTextarea}
          layout="vertical"
          label="Methods"
          placeholder="How to cook"
          validate={required}
        />
        
        <Field
          name="description"
          component={renderTextarea}
          layout="vertical"
          label="Description"
          placeholder="Description"
          validate={required}
        />

        <Field
          name="Image"
          component={renderInput}
          layout="vertical"
          label="Image Url"
          placeholder="Just image url link"
          validate={required}
        />

        <div className="field is-horizontal">
          <div className="field-label"></div>
          <div className="field-body">
            <div className="control">
              <button className={`button ${btnState} is-primary`}>
                Save
              </button>
              {error && <p className="help is-danger">{error}</p>}
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default reduxForm({ form: 'RecipeForm' })(RecipeForm);
