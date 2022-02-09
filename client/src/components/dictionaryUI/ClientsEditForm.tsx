import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getOneClientsApi } from '../../httpApi/ClietsApi';
import { IEditDialog } from '../../types/types';


const ClientsEditForm = (props: IEditDialog) => {

    const [currData, setCurrData] = useState({ name: "", address: "", tel: "" });

    useEffect(() => {
        if (props.id && props.isEdit)
            getOneClientsApi(props.id).then((data) =>
                setCurrData(data));

    }, []);

    return (
        <div>
            <Dialog open={props.isOpen} hideBackdrop>
                <DialogTitle>{props.isEdit ? "Редактировать" : "Создать"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    </DialogContentText>
                    <TextField
                        value={currData.name} onChange={(e) => setCurrData({ ...currData, name: e.currentTarget.value })} required autoFocus margin="dense" id="name"
                        label="Наименование" type="text" fullWidth
                    />
                    <TextField
                        value={currData.tel} onChange={(e) => setCurrData({ ...currData, tel: e.currentTarget.value })} autoFocus margin="dense" id="tel"
                        label="Контактный телефон" type="text" fullWidth
                    />
                    <TextField
                        value={currData.address} onChange={(e) => setCurrData({ ...currData, address: e.currentTarget.value })} autoFocus margin="dense" id="address"
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

export default ClientsEditForm;