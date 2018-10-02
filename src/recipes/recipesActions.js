import axios from 'axios';
import {
  FETCH_RECIPES,
  CREATE_RECIPE,
  UPDATE_RECIPE,
  DELETE_RECIPE,
} from '../shared/constants/actionTypes';

export const fetchRecipes = () => (dispatch) => {
  axios.get('/recipes')
    .then((res) => dispatch({ type: FETCH_RECIPES, payload: res.data.recipes }))
};

export const createRecipe = (payload) => (dispatch) => (
  axios.post('/recipes', payload)
    .then((res) => dispatch({ type: CREATE_RECIPE, payload: res.data }))
);

export const updateRecipe = (id, payload) => (dispatch) => (
  axios.put(`/recipes/${id}`, payload)
    .then((res) => dispatch({ type: UPDATE_RECIPE, payload: res.data }))
);

export const deleteRecipe = (id) => (dispatch) => (
  axios.delete(`/recipes/${id}`)
    .then((res) => dispatch({ type: DELETE_RECIPE, payload: id }))
);
