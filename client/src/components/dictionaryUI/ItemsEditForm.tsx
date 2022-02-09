import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button, MenuItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getOneItemsApi } from '../../httpApi/ItemsApi';
import { getAllUnitsApi } from '../../httpApi/UnitsApi';
import { IEditDialog } from '../../types/types';
import DataSelectItem from '../DataSelectItem';


const ItemsEditForm = (props: IEditDialog) => {

    const [currData, setCurrData] = useState({ name: "", img: "", unitId: 1 });

    useEffect(() => {
        if (props.id && props.isEdit)
            getOneItemsApi(props.id).then((data) =>
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
                    <DataSelectItem handlerApi={getAllUnitsApi} value={currData.unitId} title="Единица измерения"
                        onChange={(e) => setCurrData({ ...currData, unitId: Number(e.target.value) })} />
                    <TextField variant="outlined"
                        value={currData.img} onChange={(e) => setCurrData({ ...currData, img: e.currentTarget.value })} autoFocus margin="dense" id="img"
                        label="Изображение" type="text" fullWidth
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

export default ItemsEditForm;