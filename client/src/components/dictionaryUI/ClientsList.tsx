import { Typography } from '@mui/material';
import { DataGrid, GridCallbackDetails, GridColDef, GridRowParams, MuiEvent } from '@mui/x-data-grid';
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import { createClientsApi, deleteClientsByIdApi, getAllClientsApi, updateClientsByIdApi } from '../../httpApi/ClietsApi';
import ActionsPanel from '../ActionsPanel';
import DeleteAlertDialog from '../DeleteAlertDialog';
import SpinnerItem from '../SpinnerItem';
import ClientsEditForm from './ClientsEditForm';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'Номер', minWidth: 100 },
    { field: 'name', headerName: 'Наименование', minWidth: 500 },
    { field: 'address', headerName: 'Адрес', minWidth: 250 },
    { field: 'tel', headerName: 'Телефон', minWidth: 110 }
];

const ClientsList = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [rows, setRows] = useState<any>();
    const [loading, setLoading] = useState(true);
    const [currRow, setCurrRow] = useState("");

    const [alertIsOpen, setAlertIsOpen] = useState(false);
    const [editFormIsOpen, setEditFormIsOpen] = useState(false);
    const [isEditOperation, setIsEditOperation] = useState(false);

    useEffect(() => {

        getAllClientsApi().then((data) => {
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

        deleteClientsByIdApi(currRow).then(() => {
            getAllClientsApi().then((data) => {
                setRows(data)
                enqueueSnackbar('Операция выполнена успешно!', { variant: 'success' });
            });
        }, () => enqueueSnackbar('Ошибка, не удачно!', { variant: 'error' })).finally(() => setLoading(false));

    };
    const editAcceptCallback = async (d: any) => {

        setEditFormIsOpen(false);
        setLoading(true);

        (isEditOperation ? updateClientsByIdApi(d) : createClientsApi(d)).then(() => {
            getAllClientsApi().then((data: any) => {
                setRows(data)
                enqueueSnackbar('Операция выполнена успешно!', { variant: 'success' });
            });
        }, () => enqueueSnackbar('Ошибка, не удачно!', { variant: 'error' })).finally(() => {
            setLoading(false);
        });
    };
    return (
        <div style={{ height: "auto" }} >
            <Typography variant="h4" gutterBottom component="div">Клиенты</Typography>
            <ActionsPanel OnClickAdd={addHandler} OnClickEdit={editHandler} OnClickDelete={() => setAlertIsOpen(true)} />
            {
                loading ? <SpinnerItem top={'50px'} /> : (<DataGrid onRowClick={getRowIdGetter}
                    autoHeight style={{ width: '100%', marginTop: 5 }}
                    rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} />)
            }
            {alertIsOpen && (<DeleteAlertDialog isOpen={alertIsOpen} handleClouse={() => setAlertIsOpen(false)} handleAccept={alertAcceptCallback} />)}
            {editFormIsOpen && (<ClientsEditForm id={currRow} isOpen={editFormIsOpen} isEdit={isEditOperation}
                handleClouse={() => setEditFormIsOpen(false)} handleAccept={editAcceptCallback} />)}
        </div >
    );
};

export default ClientsList;