import React from 'react';
import ReactDOM from 'react-dom/client'; // Make sure you're importing from 'react-dom/client'
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { setUserInfo } from './redux/userSlice';
import setAuthToken from './utils/setAuthToken';

// Handle token and user information
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

// Create a root and render the app using `createRoot`
const root = ReactDOM.createRoot(document.getElementById('root')); // Use `createRoot` for React 18+
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
