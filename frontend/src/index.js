import React from 'react';
import ReactDOM from 'react-dom'; // For React 17 and below
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { setUserInfo } from './redux/userSlice';
import setAuthToken from './utils/setAuthToken';

const token = localStorage.getItem('userToken');
const userInfo = localStorage.getItem('userInfo');

if (token) {
  setAuthToken(token);

  try {
    const parsedUserInfo = JSON.parse(userInfo);
    if (parsedUserInfo) {
      store.dispatch(setUserInfo(parsedUserInfo));
    }
  } catch (error) {
    console.error('Failed to parse user info from localStorage:', error);
  }
} else {
  setAuthToken(null);
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
