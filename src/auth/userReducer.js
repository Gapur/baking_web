import { fetchInitialValues } from '../user_store';
import {
  LOGIN,
  LOGOUT,
  UPDATE_ACCOUNT,
  SIGNUP,
} from '../shared/constants/actionTypes';

export default (state = fetchInitialValues(), action) => {
  switch (action.type) {
    case SIGNUP:
    case UPDATE_ACCOUNT:
    case LOGIN: {
      return action.payload;
    }
    case LOGOUT: {
      return null;
    }
  }
  return state;
}
