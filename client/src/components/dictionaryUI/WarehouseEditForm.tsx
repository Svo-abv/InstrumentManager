import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getOneWarehousesApi } from '../../httpApi/WarehousesApi';
import { IEditDialog } from '../../types/types';


const WarehouseEditForm = (props: IEditDialog) => {

    const [currData, setCurrData] = useState({ name: "", address: "" });

    useEffect(() => {
        if (props.id && props.isEdit)
            getOneWarehousesApi(props.id).then((data) =>
                setCurrData(data));

    }, []);

    return (
        <div>
            <Dialog open={props.isOpen} hideBackdrop >
                <DialogTitle>{props.isEdit ? "Редактировать" : "Создать"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    </DialogContentText>
                    <TextField
                        value={currData.name} onChange={(e) => setCurrData({ ...currData, name: e.currentTarget.value })} required autoFocus margin="dense" id="name"
                        label="Наименование" type="text" fullWidth
                    />
                    <TextField
                        value={currData.address} onChange={(e) => setCurrData({ ...currData, address: e.currentTarget.value })} margin="dense" id="address"
                        label="Адрес" type="text" fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClouse}>Отмена</Button>
                    <Button onClick={() => props.handleAccept(currData)} color="success">Сохранить</Button>
                </DialogActions>
            </Dialog>
        </div >
    );
};

export default WarehouseEditForm;