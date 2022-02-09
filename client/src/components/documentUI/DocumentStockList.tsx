import React, { useEffect, useState } from 'react';
import ActionsPanel from '../ActionsPanel';
import { DataGrid, GridCallbackDetails, GridColDef, GridRowParams, GridValueGetterParams, MuiEvent } from '@mui/x-data-grid';
import { Typography } from '@mui/material';
import { createDocStockApi, deleteDocStockByIdApi, getAllDocStockApi, updateDocStockByIdApi } from '../../httpApi/DocumentStockApi';
import SpinnerItem from '../SpinnerItem';
import { useSnackbar } from 'notistack';
import DeleteAlertDialog from '../DeleteAlertDialog';
import DocStockEditForm from './DocStockEditForm';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'Код', width: 100 },
    { field: 'num', headerName: 'Номер', width: 100 },
    { field: 'status', headerName: 'Статус', width: 100, valueGetter: (params: GridValueGetterParams) => (`${params.row.status.name}` || '') },
    { field: 'date', type: "date", headerName: 'Дата', width: 100 },
    { field: 'type', headerName: 'Тип', width: 100, valueGetter: (params: GridValueGetterParams) => (`${params.row.type.name}` || '') },
    { field: 'warehouse', headerName: 'Склад', width: 100, valueGetter: (params: GridValueGetterParams) => (`${params.row.warehouse.name}` || '') },
    { field: 'organization', headerName: 'Организация', width: 200, valueGetter: (params: GridValueGetterParams) => (`${params.row.organization.name}` || '') },
    { field: 'client', headerName: 'Клиент', width: 200, valueGetter: (params: GridValueGetterParams) => (`${params.row.client.name}` || '') },
    { field: 'user', headerName: 'Пользователь', width: 200, valueGetter: (params: GridValueGetterParams) => (`${params.row.user.name}` || '') },
    { field: 'summ', type: "number", headerName: 'Сумма', width: 100 },
    { field: 'comment', headerName: 'Комментарий', width: 250 },
];

const DocumentStockList = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [rows, setRows] = useState<any>();
    const [loading, setLoading] = useState(true);
    const [currRow, setCurrRow] = useState("");

    const [alertIsOpen, setAlertIsOpen] = useState(false);
    const [editFormIsOpen, setEditFormIsOpen] = useState(false);
    const [isEditOperation, setIsEditOperation] = useState(false);

    useEffect(() => {

        getAllDocStockApi().then((data) => {
            setRows(data);
            setLoading(false);
        });

    }, []);

    const getRowIdGetter = (params: GridRowParams, event: MuiEvent<React.MouseEvent>, details: GridCallbackDetails) => {
        setCurrRow(params.id.toString());
    }

    const editHandler = () => {
        setEditFormIsOpen(true);
        setIsEditOperation(true);
    }

    const addHandler = () => {
        setEditFormIsOpen(true);
        setIsEditOperation(false);
    }

    const alertAcceptCallback = () => {

        setAlertIsOpen(false);
        setLoading(true);

        deleteDocStockByIdApi(currRow).then(() => {
            getAllDocStockApi().then((data) => {
                setRows(data)
                enqueueSnackbar('Операция выполнена успешно!', { variant: 'success' });
            });
        }, () => enqueueSnackbar('Ошибка, не удачно!', { variant: 'error' })).finally(() => setLoading(false));

    };
    const editAcceptCallback = async (d: any) => {

        setEditFormIsOpen(false);
        setLoading(true);

        (isEditOperation ? updateDocStockByIdApi(d) : createDocStockApi(d)).then(() => {
            getAllDocStockApi().then((data: any) => {
                setRows(data)
                enqueueSnackbar('Операция выполнена успешно!', { variant: 'success' });
            });
        }, () => enqueueSnackbar('Ошибка, не удачно!', { variant: 'error' })).finally(() => {
            setLoading(false);
        });
    };

    return (
        <div style={{ height: "auto" }} >
            <Typography variant="h4" gutterBottom component="div">Движения</Typography>
            <ActionsPanel OnClickAdd={addHandler} OnClickEdit={editHandler} OnClickDelete={() => setAlertIsOpen(true)} />
            {
                loading ? <SpinnerItem top={'50px'} /> : (<DataGrid onRowClick={getRowIdGetter}
                    autoHeight style={{ width: '100%', marginTop: 5 }}
                    rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} />)
            }
            {alertIsOpen && (<DeleteAlertDialog isOpen={alertIsOpen} handleClouse={() => setAlertIsOpen(false)} handleAccept={alertAcceptCallback} />)}
            {editFormIsOpen && (<DocStockEditForm id={currRow} isOpen={editFormIsOpen} isEdit={isEditOperation} handleClouse={() => setEditFormIsOpen(false)} handleAccept={editAcceptCallback} />)}
        </div >
    );
};

export default DocumentStockList;