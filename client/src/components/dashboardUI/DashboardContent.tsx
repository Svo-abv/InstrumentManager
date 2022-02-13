import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import LeftBar from './LeftBar';
import Copyright from '../Copyright';
import DocumentStockList from '../documentUI/DocumentStockList';
import { observer } from 'mobx-react';
import { Context } from '../..';

const DashboardContent = observer(() => {
    /// const [currentView, setCurrentView] = useState(<DocumentStockList />);
    const { currElement } = useContext(Context);
    return (
        <Box sx={{ display: 'flex' }}>
            <LeftBar />
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}>
                <Toolbar />
                <Container maxWidth={false} sx={{ mt: 4, mb: 4 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>

                            {currElement.element}

                        </Grid>
                    </Grid>
                    <Copyright sx={{ pt: 4 }} />
                </Container>
            </Box>
        </Box>
    );
})

export default DashboardContent;