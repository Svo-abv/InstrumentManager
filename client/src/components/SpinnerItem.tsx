import { CircularProgress } from '@mui/material';
import React from 'react';
interface ISpinnerItem {
    top: string;
}
const SpinnerItem = (props: ISpinnerItem) => {
    return (
        <div style={{ top: props.top, width: '100px', height: '200px', position: 'relative', margin: '0 auto' }}>
            <CircularProgress />
        </div>
    );
};

export default SpinnerItem;