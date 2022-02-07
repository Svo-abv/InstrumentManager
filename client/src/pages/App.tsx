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
import { SnackbarProvider, VariantType, useSnackbar } from 'notistack';

const mdTheme = createTheme();

const App = observer(() => {

  const { user } = React.useContext(Context);

  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    checkApi().then((data) => {
      user.user = jwtDecode(data);
      user.isAuth = true;
    }).finally(() => setLoading(false));
  }, []);

  return (
    <ThemeProvider theme={mdTheme}>
      <SnackbarProvider maxSnack={3}>
        <CssBaseline enableColorScheme />
        {
          loading ? <SpinnerItem top={'150px'} /> :
            (<BrowserRouter>
              <Routes>
                <Route path="/" element={<Auth />} />
                <Route path="/panel" element={<Panel />} />
              </Routes>
            </BrowserRouter>)
        }
      </SnackbarProvider>
    </ThemeProvider>
  );
});

export default App;
