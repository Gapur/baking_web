import {
  FETCH_NOTES,
  CREATE_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
} from '../shared/constants/actionTypes';

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_NOTES: {
      return action.payload; 
    }
    case CREATE_NOTE: {
      return state && state.concat(action.payload);
    }
    case UPDATE_NOTE: {
      return state && state.map(
        note => note.id == action.payload.id ? action.payload : note);
    }
    case DELETE_NOTE: {
      return state && state.filter(({ id }) => id != action.payload.id);
    } 
  }
  return state;
};
