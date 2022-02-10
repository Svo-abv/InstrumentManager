import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { geRowDocStockRowskApi } from '../../httpApi/DocumentStockRowsApi';
import { getAllItemsApi } from '../../httpApi/ItemsApi';
import { IEditDialog } from '../../types/types';
import DataSelectItem from '../DataSelectItem';

const DocStockRowEditForm = (props: IEditDialog) => {

    const [currData, setCurrData] = useState({
        id: 0, itemId: 0, count: 0, price: 0, summ: 0
    });
    useEffect(() => {
        if (props.id && props.isEdit)
            geRowDocStockRowskApi(props.id).then((data) => {
                setCurrData(data);
            });
    }, []);


    return (
        <Dialog open={props.isOpen} hideBackdrop fullWidth>
            <DialogTitle>{props.isEdit ? "Редактировать" : "Создать"}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                </DialogContentText>
                <DataSelectItem handlerApi={getAllItemsApi} value={currData.itemId} sx={{ mr: 2 }} title="Статус"
                    onChange={(e) => setCurrData({ ...currData, itemId: Number(e.target.value) })} />
                <TextField value={currData.count} onChange={(e) => setCurrData({ ...currData, count: Number(e.currentTarget.value) })} sx={{ mr: 2 }}
                    required autoFocus margin="dense" id="num" defaultValue={currData.id} label="Количество" type="number" />
                <TextField value={currData.count} onChange={(e) => setCurrData({ ...currData, count: Number(e.currentTarget.value) })} sx={{ mr: 2 }}
                    required autoFocus margin="dense" id="num" defaultValue={currData.id} label="Цена" type="number" />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClouse}>Отмена</Button>
                <Button onClick={() => props.handleAccept(currData)} color="success">Добавить</Button>
            </DialogActions>
        </Dialog>
    );
};

export default DocStockRowEditForm;