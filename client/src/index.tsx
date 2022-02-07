import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import UserStore from './stores/UserStore';

export const Context = createContext({
  user: new UserStore(),
});

ReactDOM.render(
  <Context.Provider value={
    {
      user: new UserStore()
    }
  }>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
