import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import RecipeForm from './components/RecipeForm';

class NewRecipe extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(values) {
    console.log(values);
  }

  render() {
    return (
      <div id="new-recipe">
        <h4 className="title is-4">New Recipe</h4>
        <RecipeForm onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default connect(null, { push })(NewRecipe);
