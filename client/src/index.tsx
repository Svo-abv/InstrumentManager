import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import MainDashboard from './components/MainDashboard';
import App from './pages/App';
import CurrentElementStore from './stores/CurrentElementStore';
import UserStore from './stores/UserStore';

export const Context = createContext({
  user: new UserStore(),
  currElement: new CurrentElementStore(<MainDashboard />),
});

ReactDOM.render(
  <Context.Provider value={
    {
      user: new UserStore(),
      currElement: new CurrentElementStore(<MainDashboard />),
    }
  }>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);

