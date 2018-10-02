import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

const RecipeDetails = ({ recipe }) => {
  return (
    <div id="recipe-detail">
      <section className="hero is-light">
        <div className="hero-body">
          <div className="columns">
            <div className="column is-4">
              <figure className="image is-4by3">
                <img src={recipe.image} />
              </figure>
            </div>
            <div className="column is-8">
              <h3 className="title is-3">
                {recipe.name}
              </h3>
              <table className="table is-hoverable">
                <tbody>
                  <tr>
                    <td>Prep:</td><td>{moment(recipe.prep).minute()} min</td>
                  </tr>
                  <tr>
                    <td>Cook:</td><td>{moment(recipe.cook).minute()} min</td>
                  </tr>
                  <tr>
                    <td>Cooking Level:</td><td>{recipe.level}</td>
                  </tr>
                  <tr>
                    <td>By:</td><td>{recipe.createdBy}</td>
                  </tr>
                  <tr>
                    <td>Categories:</td><td>{recipe.categories.join(', ')}</td>
                  </tr>
                  <tr><td>Description:</td><td>{recipe.description}</td></tr>
                </tbody>
              </table>   
            </div>
          </div>
        </div>
      </section>
      <section className="section columns">
        <div className="column is-4">
          <h4 className="title is-4">Ingredients</h4>
          <hr />
          <table className="table is-striped is-hoverable is-fullwidth">
            <tbody>
              {recipe.ingredients.map(ingredient =>
                <tr key={ingredient}><td>{ingredient}</td></tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="column is-8">
          <h4 className="title is-4">Methods</h4>
          <hr />
          <p></p>
        </div> 
      </section>
    </div>
  );
}

export default connect(
  ({ recipes }, { match: { params } }) => ({
    recipe: recipes.find(({ _id }) => _id == params.id)
  })
)(RecipeDetails);
