import axios from 'axios';
import { saveUser } from '../user_store';
import {
  LOGIN,
  LOGOUT,
  UPDATE_ACCOUNT,
  SIGNUP,
} from '../shared/constants/actionTypes';

export const login = (payload) => (dispatch) => (
  axios.post('/login', payload)
    .then((res) => {
      dispatch({ type: LOGIN, payload: res.data });
      saveUser(res.data);
    })
);

export const signup = (payload) => (dispatch) => (
  axios.post('/signup', payload)
    .then((res) => dispatch({ type: SIGNUP, payload: res.data }))
);

export const logout = () => (dispatch) => (
  axios.delete('/logout')
    .then((res) => dispatch({ type: LOGOUT }))
);

export const updateUserInfo = (payload) => (dispatch) => (
  axios.put('/account', { customer: payload })
    .then((res) => dispatch({ type: UPDATE_ACCOUNT, payload: res.data }))
);
