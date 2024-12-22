import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { setUserInfo } from './redux/userSlice';
import setAuthToken from './utils/setAuthToken';

const token = localStorage.getItem('userToken');
if (token) {
  setAuthToken(token);
  store.dispatch(setUserInfo(JSON.parse(localStorage.getItem('userInfo'))));
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

