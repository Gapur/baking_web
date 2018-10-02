import axios from 'axios';
import {
  FETCH_NOTES,
  CREATE_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
} from '../shared/constants/actionTypes';

export const fetchNotes = () => (dispatch) => (
  axios.get('/notes')
    .then((res) => dispatch({ type: FETCH_NOTES, payload: res.data.notes }))
);

export const createNote = (payload) => (dispatch) => (
  axios.post('/notes', payload)
    .then((res) => dispatch({ type: CREATE_NOTE, payload: res.data }))
);

export const updateNote = (id, payload) => (dispatch) => (
  axios.put(`/notes/${id}`, { note: payload })
    .then((res) => dispatch({ type: UPDATE_NOTE, payload: res.data }))
);

export const deleteNote = (id) => (dispatch) => (
  axios.delete(`/notes/${id}`)
    .then(() => dispatch({ type: DELETE_NOTE, payload: id }))
);
