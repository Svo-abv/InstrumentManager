import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getOneOrgApi } from '../../httpApi/OrganizationsApi';
import { IEditDialog } from '../../types/types';


const OrgEditForm = (props: IEditDialog) => {

    const [currData, setCurrData] = useState({ name: "", address: "", inn: 0, kpp: 0 });

    useEffect(() => {
        if (props.id && props.isEdit)
            getOneOrgApi(props.id).then((data) =>
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
                    <TextField sx={{ mr: 2 }}
                        value={currData.inn} onChange={(e) => setCurrData({ ...currData, inn: Number(e.currentTarget.value) })} autoFocus margin="normal" id="inn"
                        label="ИНН" type="text"
                    />
                    <TextField
                        value={currData.kpp} onChange={(e) => setCurrData({ ...currData, kpp: Number(e.currentTarget.value) })} autoFocus margin="normal" id="kpp"
                        label="КПП" type="text"
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

export default OrgEditForm;