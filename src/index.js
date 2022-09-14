import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import AppUseReducer from './AppUseReducer';
import AppUseState from './AppUseState';

ReactDOM.render(
  <React.StrictMode>
    <AppUseState />
  {/* <AppUseReducer /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

