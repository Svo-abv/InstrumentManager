import { Typography } from '@mui/material';
import { GridColDef, DataGrid, GridCallbackDetails, GridRowParams, MuiEvent } from '@mui/x-data-grid';
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import { createWarehousesApi, deleteWarehousesByIdApi, getAllWarehousesApi, updateWarehousesByIdApi } from '../../httpApi/WarehousesApi';
import ActionsPanel from '../ActionsPanel';
import DeleteAlertDialog from '../DeleteAlertDialog';
import SpinnerItem from '../SpinnerItem';
import WarehouseEditForm from './WarehouseEditForm';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'Номер', minWidth: 100 },
    { field: 'name', headerName: 'Наименование', minWidth: 500 },
    { field: 'address', headerName: 'Адрес', minWidth: 250 }

];

const WarehousesList = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [rows, setRows] = useState<any>();
    const [loading, setLoading] = useState(true);
    const [currRow, setCurrRow] = useState("");

    const [alertIsOpen, setAlertIsOpen] = useState(false);
    const [editFormIsOpen, setEditFormIsOpen] = useState(false);
    const [isEditOperation, setIsEditOperation] = useState(false);

    useEffect(() => {

        getAllWarehousesApi().then((data) => {
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

        deleteWarehousesByIdApi(currRow).then(() => {
            getAllWarehousesApi().then((data) => {
                setRows(data)
                enqueueSnackbar('Операция выполнена успешно!', { variant: 'success' });
            });
        }, () => enqueueSnackbar('Ошибка, не удачно!', { variant: 'error' })).finally(() => setLoading(false));

    };
    const editAcceptCallback = async (d: any) => {

        setEditFormIsOpen(false);
        setLoading(true);

        (isEditOperation ? updateWarehousesByIdApi(d) : createWarehousesApi(d)).then(() => {
            getAllWarehousesApi().then((data: any) => {
                setRows(data)
                enqueueSnackbar('Операция выполнена успешно!', { variant: 'success' });
            });
        }, () => enqueueSnackbar('Ошибка, не удачно!', { variant: 'error' })).finally(() => {
            setLoading(false);
        });
    };


    return (
        <div style={{ height: "auto" }} >
            <Typography variant="h4" gutterBottom component="div">Склады</Typography>
            <ActionsPanel OnClickAdd={addHandler} OnClickEdit={editHandler} OnClickDelete={() => setAlertIsOpen(true)} />
            {
                loading ? <SpinnerItem top={'50px'} /> : (<DataGrid onRowClick={getRowIdGetter}
                    autoHeight style={{ width: '100%', marginTop: 5 }}
                    rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} />)
            }
            {alertIsOpen && (<DeleteAlertDialog isOpen={alertIsOpen} handleClouse={() => setAlertIsOpen(false)} handleAccept={alertAcceptCallback} />)}
            {editFormIsOpen && (<WarehouseEditForm id={currRow} isOpen={editFormIsOpen} isEdit={isEditOperation} handleClouse={() => setEditFormIsOpen(false)} handleAccept={editAcceptCallback} />)}

        </div >
    );
};

export default WarehousesList;