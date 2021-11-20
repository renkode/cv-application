import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

// moral of the story:
// lifting state up will suck without PureComponents
// creating subcomponents helps so that they only render into pieces!!!

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
