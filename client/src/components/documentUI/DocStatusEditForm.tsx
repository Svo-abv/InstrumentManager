import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getOneDocStatusApi } from '../../httpApi/DocumentStatusApi';
import { IEditDialog } from '../../types/types';


const DocStatusEditForm = (props: IEditDialog) => {

    const [currData, setCurrData] = useState({ name: "" });

    useEffect(() => {
        if (props.id && props.isEdit)
            getOneDocStatusApi(props.id).then((data) =>
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
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClouse}>Отмена</Button>
                    <Button onClick={() => props.handleAccept(currData)} color="success">Сохранить</Button>
                </DialogActions>
            </Dialog>
        </div >
    );
};

export default DocStatusEditForm;