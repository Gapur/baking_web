import {
  FETCH_RECIPES,
  CREATE_RECIPE,
  UPDATE_RECIPE,
  DELETE_RECIPE,
} from '../shared/constants/actionTypes';

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_RECIPES: {
      return action.payload; 
    }
    case CREATE_RECIPE: {
      return state && state.concat(action.payload);
    }
    case UPDATE_RECIPE: {
      return state && state.map(
        recipe => recipe.id == action.payload.id ? action.payload : recipe);
    }
    case DELETE_RECIPE: {
      return state && state.filter(({ id }) => id != action.payload.id);
    } 
  }
  return state;
};
