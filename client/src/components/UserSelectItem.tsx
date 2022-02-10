import { TextField, MenuItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { IUserSelectItem } from '../types/types';

const UserSelectItem = (props: IUserSelectItem) => {
    const { value, handlerApi, fullWidth, sx, title } = { ...props };

    const [items, setItems] = useState([{ id: value, name: "" }]);


    useEffect(() => {
        handlerApi().then((data) => setItems(data));
    }, []);

    return (
        <TextField select variant="outlined" disabled
            value={value} autoFocus margin="dense" id="unitId" sx={sx}
            label={title} type="text" fullWidth={fullWidth}>
            {
                items.map((item) => (<MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>))
            }
        </TextField>
    );
};

export default UserSelectItem;