import { Box, TextField, FormControlLabel, Checkbox, Button, Grid } from '@mui/material';
import React, { useContext } from 'react';
import Link from '@mui/material/Link';
import Copyright from '../Copyright';
import { loginApi } from '../../httpApi/UserApi';
import { useNavigate } from 'react-router-dom';
import AlertDialog from '../AlertDialog';
import { Context } from '../..';
import jwtDecode from 'jwt-decode';

const FormSignIn = () => {
    const navi = useNavigate();
    const { user } = useContext(Context);

    const [open, setOpen] = React.useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        try {
            const d = await loginApi(String(data.get('email')), String(data.get('password')));
            user.user = jwtDecode(d);
            user.isAuth = true;
            navi("/panel");
        } catch (e: any) {
            setOpen(true);
        }
    };
    return (<div>
        <AlertDialog open={open} setOpen={setOpen} />
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="E-mail адрес"
                name="email"
                autoComplete="email"
                autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Пароль"
                type="password"
                id="password"
                autoComplete="current-password"
            />
            <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Запомнить меня"
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Войти
            </Button>
            <Grid container>
                <Grid item xs>
                    <Link href="#" variant="body2">
                        Забыли пароль?
                    </Link>
                </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
        </Box>
    </div>
    );
};

export default FormSignIn;