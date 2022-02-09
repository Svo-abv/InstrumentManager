import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getAllClientsApi } from '../../httpApi/ClietsApi';
import { getOneDocPaymentsApi } from '../../httpApi/DocumentPaymentApi';
import { getAllDocStatusApi } from '../../httpApi/DocumentStatusApi';
import { getAllDocTypesApi } from '../../httpApi/DocumentTypesApi';
import { getAllOrgApi } from '../../httpApi/OrganizationsApi';
import { getAllUserskApi } from '../../httpApi/UserApi';
import { IEditDialog } from '../../types/types';
import DataSelectItem from '../DataSelectItem';


const DocPaymentsEditForm = (props: IEditDialog) => {

    const [currData, setCurrData] = useState({
        id: 0, num: "", statusId: 0, date: '', typeId: 0,
        organizationId: 0, clientId: 0, userId: 0, summ: 0, comment: ""
    });
    useEffect(() => {
        if (props.id && props.isEdit)
            getOneDocPaymentsApi(props.id).then((data) =>
                setCurrData(data));

    }, []);

    return (
        <div>
            <Dialog open={props.isOpen} hideBackdrop>
                <DialogTitle>{props.isEdit ? "Редактировать" : "Создать"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    </DialogContentText>
                    <TextField value={currData.num} onChange={(e) => setCurrData({ ...currData, num: e.currentTarget.value })} sx={{ mr: 2 }}
                        required autoFocus margin="dense" id="num" defaultValue={currData.id} label="Номер" type="text" />
                    <TextField value={currData.date} onChange={(e) => setCurrData({ ...currData, date: e.currentTarget.value })} sx={{ mr: 2 }}
                        required autoFocus margin="dense" id="date" label="Дата" type="date" />

                    <DataSelectItem handlerApi={getAllDocStatusApi} value={currData.statusId} sx={{ mr: 2 }} title="Статус"
                        onChange={(e) => setCurrData({ ...currData, statusId: Number(e.target.value) })} />
                    <DataSelectItem handlerApi={getAllDocTypesApi} value={currData.typeId} sx={{ mr: 2 }} title="Тип операции"
                        onChange={(e) => setCurrData({ ...currData, typeId: Number(e.target.value) })} />
                    <DataSelectItem handlerApi={getAllOrgApi} value={currData.organizationId} sx={{ mr: 2 }} title="Организация"
                        onChange={(e) => setCurrData({ ...currData, organizationId: Number(e.target.value) })} />
                    <DataSelectItem handlerApi={getAllClientsApi} value={currData.clientId} sx={{ mr: 2 }} title="Клиент"
                        onChange={(e) => setCurrData({ ...currData, clientId: Number(e.target.value) })} />
                    <DataSelectItem handlerApi={getAllUserskApi} value={currData.userId} sx={{ mr: 2 }} title="Пользователь"
                        onChange={(e) => setCurrData({ ...currData, userId: Number(e.target.value) })} />
                    <TextField value={currData.summ} onChange={(e) => setCurrData({ ...currData, summ: Number(e.currentTarget.value) })} sx={{ mr: 2 }}
                        autoFocus margin="dense" id="summ" label="Сумма" type="number" />
                    <TextField value={currData.comment} onChange={(e) => setCurrData({ ...currData, comment: e.currentTarget.value })} sx={{ mr: 2 }}
                        autoFocus margin="dense" id="comment" label="Комментарий" type="text" multiline />
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClouse}>Отмена</Button>
                    <Button onClick={() => props.handleAccept(currData)} color="success">Сохранить</Button>
                </DialogActions>
            </Dialog>
        </div >
    );
};

export default DocPaymentsEditForm;