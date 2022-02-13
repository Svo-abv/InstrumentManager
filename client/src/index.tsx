import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import MainInformation from './components/dashboardUI/MainInformation';
import App from './pages/App';
import CurrentElementStore from './stores/CurrentElementStore';
import UserStore from './stores/UserStore';

export const Context = createContext({
  user: new UserStore(),
  currElement: new CurrentElementStore(<MainInformation />),
});

ReactDOM.render(
  <Context.Provider value={
    {
      user: new UserStore(),
      currElement: new CurrentElementStore(<MainInformation />),
    }
  }>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);

