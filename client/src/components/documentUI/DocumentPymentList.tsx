import { Paper, Typography } from '@mui/material';
import { GridColDef, DataGrid, GridCallbackDetails, GridRowParams, MuiEvent, GridValueGetterParams } from '@mui/x-data-grid';
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import { createDocPaymentsApi, deleteDocPaymentsByIdApi, getAllDocPaymentsApi, updateDocPaymentsByIdApi } from '../../httpApi/DocumentPaymentApi';
import ActionsPanel from '../ActionsPanel';
import DeleteAlertDialog from '../DeleteAlertDialog';
import SpinnerItem from '../SpinnerItem';
import DocPaymentsEditForm from './DocPaymentsEditForm';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'Код', minWidth: 100 },
    { field: 'num', headerName: 'Номер', minWidth: 100 },
    { field: 'status', headerName: 'Статус', minWidth: 100, valueGetter: (params: GridValueGetterParams) => (`${params.row.status.name}` || '') },
    { field: 'date', type: "date", headerName: 'Дата', minWidth: 100, valueGetter: (params: GridValueGetterParams) => (`${new Date(params.row.date).toLocaleString()}` || '') },
    { field: 'type', headerName: 'Тип', minWidth: 100, valueGetter: (params: GridValueGetterParams) => (`${params.row.type.name}` || '') },
    { field: 'organization', headerName: 'Организация', minWidth: 200, valueGetter: (params: GridValueGetterParams) => (`${params.row.organization.name}` || '') },
    { field: 'client', headerName: 'Клиент', minWidth: 200, valueGetter: (params: GridValueGetterParams) => (`${params.row.client.name}` || '') },
    { field: 'user', headerName: 'Пользователь', minWidth: 200, valueGetter: (params: GridValueGetterParams) => (`${params.row.user.name}` || '') },
    { field: 'summ', type: "number", headerName: 'Сумма', minWidth: 100 },
    { field: 'comment', headerName: 'Комментарий', minWidth: 250 },
];

const DocumentPymentList = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [rows, setRows] = useState<any>();
    const [loading, setLoading] = useState(true);
    const [currRow, setCurrRow] = useState("");

    const [alertIsOpen, setAlertIsOpen] = useState(false);
    const [editFormIsOpen, setEditFormIsOpen] = useState(false);
    const [isEditOperation, setIsEditOperation] = useState(false);

    useEffect(() => {

        getAllDocPaymentsApi().then((data) => {
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

        deleteDocPaymentsByIdApi(currRow).then(() => {
            getAllDocPaymentsApi().then((data) => {
                setRows(data)
                enqueueSnackbar('Операция выполнена успешно!', { variant: 'success' });
            });
        }, () => enqueueSnackbar('Ошибка, не удачно!', { variant: 'error' })).finally(() => setLoading(false));

    };
    const editAcceptCallback = async (d: any) => {

        setEditFormIsOpen(false);
        setLoading(true);

        (isEditOperation ? updateDocPaymentsByIdApi(d) : createDocPaymentsApi(d)).then(() => {
            getAllDocPaymentsApi().then((data: any) => {
                setRows(data)
                enqueueSnackbar('Операция выполнена успешно!', { variant: 'success' });
            });
        }, () => enqueueSnackbar('Ошибка, не удачно!', { variant: 'error' })).finally(() => {
            setLoading(false);
        });
    };

    return (
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h5" gutterBottom component="div">Платежы</Typography>
            <ActionsPanel OnClickAdd={addHandler} OnClickEdit={editHandler} OnClickDelete={() => setAlertIsOpen(true)} />
            {
                loading ? <SpinnerItem top={'50px'} /> : (<DataGrid showColumnRightBorder showCellRightBorder density="compact" onRowClick={getRowIdGetter}
                    autoHeight style={{ width: '100%', marginTop: 5 }}
                    rows={rows} columns={columns} pageSize={15} rowsPerPageOptions={[5, 15, 100]} />)
            }
            {alertIsOpen && (<DeleteAlertDialog isOpen={alertIsOpen} handleClouse={() => setAlertIsOpen(false)} handleAccept={alertAcceptCallback} />)}
            {editFormIsOpen && (<DocPaymentsEditForm id={currRow} isOpen={editFormIsOpen} isEdit={isEditOperation} handleClouse={() => setEditFormIsOpen(false)} handleAccept={editAcceptCallback} />)}
        </Paper >
    );
};

export default DocumentPymentList;