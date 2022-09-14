# "useReducer React Hook Tutorial"

useState => userReducer

Change src/index.js that line

import AppUseState from './AppUseState'; ... => import AppUseReducer from './AppUseReducer';
ReactDOM.render(
  <React.StrictMode>
    <AppUseState />    ....=> <AppUseReducer />
  </React.StrictMode>,
  document.getElementById('root')
);


