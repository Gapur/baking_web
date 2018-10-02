import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Switch, Route } from 'react-router-dom';

import withData from '../shared/components/LoadingHoc';
import { fetchRecipes } from './recipesActions';
import EditRecipe from './EditRecipe';
import RecipesList from './RecipesList';
import MyRecipesList from './MyRecipesList';
import NewRecipe from './NewRecipe';
import RecipeDetails from './RecipeDetails';

const RecipesScreen = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/recipes" component={RecipesList} />
        <Route exact path="/recipes/my" component={MyRecipesList} />
        <Route exact path="/recipes/my/new" component={NewRecipe} />
        <Route exact path="/recipes/my/edit/:id" component={EditRecipe} />
        <Route exact path="/recipes/:id" component={RecipeDetails} />
        <Route path="/" component={RecipesList} />
      </Switch>
    </div>
  );
}

export default compose(
  connect(({ recipes }) => ({
    recipes
  }),
    { fetchRecipes }
  ),
  withData(
    ({ recipes, fetchRecipes }) => ({
      loader: fetchRecipes, isLoaded: recipes != null,
    })
  )
)(RecipesScreen);
