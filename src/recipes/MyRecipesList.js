import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Masonry from 'react-masonry-component';
import { Link } from 'react-router-dom';

class MyRecipesList extends Component {
  
  renderHeader() {
    return (
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <div className="navbar-item">
            <h4 className="title is-4">My Recipes</h4>
          </div>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start"></div>
          <div className="navbar-end">
            <div className="navbar-item">
              <Link className="button is-primary" to="/recipes/my/new">
                New Recipe
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  
  render() {
    return (
      <div id="my-recipes">
        {this.renderHeader()}
         
      </div>
    )
  }
}

export default connect(
  ({ recipes }) => ({ recipes }),
  { push }
)(MyRecipesList);
