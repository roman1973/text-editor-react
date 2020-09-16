import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Helmet from 'react-helmet'


ReactDOM.render(
  <React.Fragment>
    <Helmet
      title='Text Editor'
    />
    <App />
  </React.Fragment>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
