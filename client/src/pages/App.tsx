import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import jwtDecode from 'jwt-decode';
import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Context } from '..';
import SpinnerItem from '../components/SpinnerItem';
import { checkApi } from '../httpApi/UserApi';
import Auth from './Auth';
import Panel from './Panel';
import { observer } from 'mobx-react';

const mdTheme = createTheme();

const App = observer(() => {

  const { user } = React.useContext(Context);

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    localStorage.getItem("jwtHash") && checkApi().then((data) => {
      localStorage.setItem("jwtHash", data);
      user.user = jwtDecode(data);
      user.isAuth = true;
    }).finally(() => setLoading(false));
    //setLoading(false);
  }, []);
  return (
    <ThemeProvider theme={mdTheme}>
      <CssBaseline enableColorScheme />
      {
        loading ? <SpinnerItem /> :
          (<BrowserRouter>
            <Routes>
              <Route path="/" element={<Auth />} />
              <Route path="/panel" element={<Panel />} />
            </Routes>
          </BrowserRouter>)
      }

    </ThemeProvider>
  );
});

export default App;
