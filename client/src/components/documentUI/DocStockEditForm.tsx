import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from '@mui/material';
import { DataGrid, GridCallbackDetails, GridColDef, GridRowParams, GridValueGetterParams, MuiEvent } from '@mui/x-data-grid';
import { useSnackbar } from 'notistack';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../..';
import { getAllClientsApi } from '../../httpApi/ClietsApi';
import { getAllDocStatusApi } from '../../httpApi/DocumentStatusApi';
import { getOneDocStockApi } from '../../httpApi/DocumentStockApi';
import { createBlunckDocStockRowApi, deleteDocStockRowApi, getAllDocStockRowskApi, saveAllDocStockRowsApi } from '../../httpApi/DocumentStockRowsApi';
import { getAllDocTypesApi } from '../../httpApi/DocumentTypesApi';
import { getAllOrgApi } from '../../httpApi/OrganizationsApi';
import { getAllUserskApi } from '../../httpApi/UserApi';
import { getAllWarehousesApi } from '../../httpApi/WarehousesApi';
import { IEditDialog } from '../../types/types';
import ActionsPanel from '../ActionsPanel';
import DataSelectItem from '../DataSelectItem';
import SpinnerItem from '../SpinnerItem';
import UserSelectItem from '../UserSelectItem';
import DocStockRowEditForm from './DocStockRowEditForm';

const columns: GridColDef[] = [
    { field: 'itemId', headerName: 'Номенклатура', minWidth: 300 },// , valueGetter:(params: GridValueGetterParams) => (`${params.row.itemId.name}` || '') 
    { field: 'count', editable: true, type: "number", headerName: 'Количество', minWidth: 200 },
    { field: 'price', editable: true, type: "number", headerName: 'Цена', minWidth: 200 },
    { field: 'summ', type: "number", headerName: 'Сумма', minWidth: 200, valueGetter: (params: GridValueGetterParams) => (`${params.row.price * params.row.count}` || '') },//
];

const DocStockEditForm = (props: IEditDialog) => {

    const { user } = useContext(Context);
    const { enqueueSnackbar } = useSnackbar();

    const [isOpen, setIsOpen] = useState(false);
    const [isEditOperation, setIsEditOperation] = useState(false);

    const [loading, setLoading] = useState(true);
    const [rows, setRows] = useState<any>();
    const [currRow, setCurrRow] = useState("");
    const [currData, setCurrData] = useState({
        id: 0, num: "", statusId: 0, date: new Date().toISOString().substring(0, 19), typeId: 0, warehouseId: 0,
        organizationId: 0, clientId: 0, userId: user.user.id, summ: 0, comment: ""
    });

    useEffect(() => {
        if (props.id && props.isEdit)
            getOneDocStockApi(props.id).then((data) => {
                setCurrData({ ...data, date: data.date.substring(0, 19) });
                getAllDocStockRowskApi(String(data.id)).then((data) => setRows(data));

            }).finally(() => setLoading(false));
    }, []);

    const getRowIdGetter = (params: GridRowParams, event: MuiEvent<React.MouseEvent>, details: GridCallbackDetails) => {
        setCurrRow(params.id.toString());
    }

    const addHandler = () => {
        createBlunckDocStockRowApi(String(currData.id)).then(() =>
            getAllDocStockRowskApi(String(currData.id)).then((data) => {
                setRows(data);
                enqueueSnackbar('Операция выполнена успешно!', { variant: 'success' });
            }), () => enqueueSnackbar('Ошибка, не удачно!', { variant: 'error' }))
    };

    const editHandler = () => {
        setIsOpen(true);
        setIsEditOperation(true);
    }

    const deleteHandler = () => {
        deleteDocStockRowApi(currRow).then(() =>
            getAllDocStockRowskApi(String(currData.id)).then((data) => {
                setRows(data);
                enqueueSnackbar('Операция выполнена успешно!', { variant: 'success' });
            }), () => enqueueSnackbar('Ошибка, не удачно!', { variant: 'error' })
        )
    }

    const editAcceptCallback = async (d: any) => {

        setIsOpen(false);

        (isEditOperation ? saveAllDocStockRowsApi(d) : createBlunckDocStockRowApi(d)).then(() => {
            getAllDocStockRowskApi(String(currData.id)).then((data: any) => {
                setRows(data);
                enqueueSnackbar('Операция выполнена успешно!', { variant: 'success' });
            });
        }, () => enqueueSnackbar('Ошибка, не удачно!', { variant: 'error' })).finally(() => {
            setLoading(false);
        });
    };

    return (
        <Dialog open={props.isOpen} hideBackdrop fullWidth maxWidth='xl'>
            <DialogTitle>{props.isEdit ? "Редактировать" : "Создать"}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                </DialogContentText>
                <TextField value={currData.num} onChange={(e) => setCurrData({ ...currData, num: e.currentTarget.value })} sx={{ mr: 2 }}
                    required autoFocus margin="dense" id="num" defaultValue={currData.id} label="Номер" type="text" />
                <TextField value={currData.date} onChange={(e) => setCurrData({ ...currData, date: e.currentTarget.value })} sx={{ mr: 2 }}
                    required autoFocus margin="dense" id="date" label="Дата" type="datetime-local" />

                <DataSelectItem handlerApi={getAllDocStatusApi} value={currData.statusId} sx={{ mr: 2 }} title="Статус"
                    onChange={(e) => setCurrData({ ...currData, statusId: Number(e.target.value) })} />
                <DataSelectItem handlerApi={getAllDocTypesApi} value={currData.typeId} sx={{ mr: 2 }} title="Тип операции"
                    onChange={(e) => setCurrData({ ...currData, typeId: Number(e.target.value) })} />
                <DataSelectItem handlerApi={getAllWarehousesApi} value={currData.warehouseId} sx={{ mr: 2 }} title="Склад"
                    onChange={(e) => setCurrData({ ...currData, warehouseId: Number(e.target.value) })} />
                <DataSelectItem handlerApi={getAllOrgApi} value={currData.organizationId} sx={{ mr: 2 }} title="Организация"
                    onChange={(e) => setCurrData({ ...currData, organizationId: Number(e.target.value) })} />
                <DataSelectItem handlerApi={getAllClientsApi} value={currData.clientId} sx={{ mr: 2 }} title="Клиент"
                    onChange={(e) => setCurrData({ ...currData, clientId: Number(e.target.value) })} />
                <UserSelectItem handlerApi={getAllUserskApi} value={currData.userId} sx={{ mr: 2 }} title="Пользователь" />
                <ActionsPanel OnClickAdd={addHandler} OnClickEdit={editHandler} OnClickDelete={deleteHandler} />
                {
                    loading ? <SpinnerItem top={'50px'} /> : (<DataGrid onRowClick={getRowIdGetter}
                        autoHeight style={{ width: '100%', marginTop: 5 }}
                        rows={rows} columns={columns} pageSize={7} rowsPerPageOptions={[5]} />)
                }
                <TextField fullWidth value={currData.comment} onChange={(e) => setCurrData({ ...currData, comment: e.currentTarget.value })} sx={{ mr: 2 }}
                    autoFocus margin="dense" id="comment" label="Комментарий" type="text" multiline />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClouse}>Отмена</Button>
                <Button onClick={() => props.handleAccept(currData)} color="success">Сохранить и закрыть</Button>
            </DialogActions>
            {isOpen && <DocStockRowEditForm isOpen={isOpen} id={currRow} handleAccept={editAcceptCallback} isEdit={isEditOperation} handleClouse={() => setIsOpen(false)} />}
        </Dialog>
    );
};

export default DocStockEditForm;