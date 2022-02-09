import { TextField, MenuItem } from '@mui/material';
import React, { useEffect, useState } from 'react';

interface IDataSelectItem {
    value: number;
    title: string;
    onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    handlerApi: () => Promise<any>;
    fullWidth?: boolean;
    sx?: any;
}

const DataSelectItem = (props: IDataSelectItem) => {
    const { value, onChange, handlerApi, fullWidth, sx, title } = { ...props };

    const [items, setItems] = useState([{ id: value, name: "" }]);


    useEffect(() => {
        handlerApi().then((data) => setItems(data));
    }, []);

    return (
        <TextField select variant="outlined"
            value={value} onChange={(e) => onChange(e)} autoFocus margin="dense" id="unitId" sx={sx}
            label={title} type="text" fullWidth={fullWidth}
        >
            {
                items.map((item) => (<MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>))
            }
        </TextField>
    );
};

export default DataSelectItem;