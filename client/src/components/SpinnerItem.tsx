import { CircularProgress } from '@mui/material';
import React from 'react';

const SpinnerItem = () => {
    return (
        <div style={{ top: '150px', width: '100px', height: '200px', position: 'relative', margin: '0 auto' }}>
            <CircularProgress />
        </div>
    );
};

export default SpinnerItem;