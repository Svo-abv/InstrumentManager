import { Box, TextField, FormControlLabel, Checkbox, Button, Grid } from '@mui/material';
import React from 'react';
import Link from '@mui/material/Link';
import Copyright from '../Copyright';

const FormSignIn = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    return (
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
    );
};

export default FormSignIn;