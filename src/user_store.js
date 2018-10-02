import axios from 'axios';

const KEY = 'user';

export const saveUser = (user) => {
  sessionStorage.setItem(KEY, JSON.stringify(user));
  axios.defaults.headers.common['Authorization'] = user.token;
};

export const fetchInitialValues = () => {
  const userInfo = JSON.parse(sessionStorage.getItem(KEY));
  axios.defaults.headers.common['Authorization'] = userInfo ? userInfo.token : null;
  return userInfo || null;
};
