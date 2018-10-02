import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Masonry from 'react-masonry-component';

class RecipesList extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.props.push(`/recipes/${id}`);
  }
  
  renderHeader() {
    return (
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <div className="navbar-item">
            <h4 className="title is-4">Baking Recipes</h4>
          </div>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start"></div>
          <div className="navbar-end">
            <div className="navbar-item">
            </div>
          </div>
        </div>
      </nav>
    );
  }

  renderRecipe(recipe) {
    return (
      <div
        key={recipe._id}
        className="column is-3"
        onClick={() => this.handleClick(recipe._id)}
        >
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={recipe.image} alt="recipe" />
            </figure>
          </div>
          <div className="card-content">
            <h4 className="title is-4">{recipe.name}</h4>
          </div>
        </div>
      </div>
    );
  }
  
  render() {
    return (
      <div id="recipes">
        {this.renderHeader()}
          
        <Masonry className="columns is-multiline">
          {this.props.recipes.map(recipe => this.renderRecipe(recipe))}
        </Masonry>
      </div>
    );
  }
}

export default connect(
  ({ recipes }) => ({ recipes }),
  { push }
)(RecipesList); 
