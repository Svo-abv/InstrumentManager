import { Paper, Typography } from '@mui/material';
import { GridColDef, DataGrid, GridRowParams, MuiEvent, GridCallbackDetails } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { createPersonsApi, deletePersonsByIdApi, getAllPersonsApi, updatePersonsByIdApi } from '../../httpApi/PersonsApi';
import ActionsPanel from '../ActionsPanel';
import DeleteAlertDialog from '../DeleteAlertDialog';
import SpinnerItem from '../SpinnerItem';
import { useSnackbar } from 'notistack';
import PersonsEditForm from './PersonsEditForm';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'Номер', minWidth: 100 },
    { field: 'name', headerName: 'Наименование', minWidth: 500 }
];

const PersonsList = () => {

    const { enqueueSnackbar } = useSnackbar();
    const [rows, setRows] = useState<any>();
    const [loading, setLoading] = useState(true);
    const [currRow, setCurrRow] = useState("");

    const [alertIsOpen, setAlertIsOpen] = useState(false);
    const [editFormIsOpen, setEditFormIsOpen] = useState(false);
    const [isEditOperation, setIsEditOperation] = useState(false);

    useEffect(() => {
        getAllPersonsApi().then((data) => {
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

        deletePersonsByIdApi(currRow).then(() => {
            getAllPersonsApi().then((data) => {
                setRows(data)
                enqueueSnackbar('Операция выполнена успешно!', { variant: 'success' });
            });
        }, () => enqueueSnackbar('Ошибка, не удачно!', { variant: 'error' })).finally(() => setLoading(false));

    };
    const editAcceptCallback = async (d: any) => {

        setEditFormIsOpen(false);
        setLoading(true);

        (isEditOperation ? updatePersonsByIdApi(d) : createPersonsApi(d)).then(() => {
            getAllPersonsApi().then((data: any) => {
                setRows(data)
                enqueueSnackbar('Операция выполнена успешно!', { variant: 'success' });
            });
        }, () => enqueueSnackbar('Ошибка, не удачно!', { variant: 'error' })).finally(() => {
            setLoading(false);
        });
    };

    return (
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h5" gutterBottom component="div">Физ. лица</Typography>
            <ActionsPanel OnClickAdd={addHandler} OnClickEdit={editHandler} OnClickDelete={() => setAlertIsOpen(true)} />
            {
                loading ? <SpinnerItem top={'50px'} /> : (<DataGrid showColumnRightBorder showCellRightBorder density="compact" onRowClick={getRowIdGetter}
                    autoHeight style={{ width: '100%', marginTop: 5 }}
                    rows={rows} columns={columns} pageSize={15} rowsPerPageOptions={[5, 15, 100]} />)
            }
            {alertIsOpen && (<DeleteAlertDialog isOpen={alertIsOpen} handleClouse={() => setAlertIsOpen(false)} handleAccept={alertAcceptCallback} />)}
            {editFormIsOpen && (<PersonsEditForm id={currRow} isOpen={editFormIsOpen} isEdit={isEditOperation} handleClouse={() => setEditFormIsOpen(false)} handleAccept={editAcceptCallback} />)}
        </Paper>
    );
};

export default PersonsList;