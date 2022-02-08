import { Typography } from '@mui/material';
import { GridColDef, DataGrid, GridRowParams, MuiEvent, GridCallbackDetails } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { createUnitApi, deleteByIdApi, getAllUnitsApi, updateByIdApi } from '../../httpApi/UnitsApi';
import ActionsPanel from '../ActionsPanel';
import DeleteAlertDialog from '../DeleteAlertDialog';
import SpinnerItem from '../SpinnerItem';
import { useSnackbar } from 'notistack';
import UnitsEditForm from './UnitsEditForm';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'Номер', width: 100 },
    { field: 'name', headerName: 'Наименование', width: 250 }
];



const UnitsList = () => {

    const { enqueueSnackbar } = useSnackbar();
    const [rows, setRows] = useState<any>();
    const [loading, setLoading] = useState(true);
    const [currRow, setCurrRow] = useState("");

    const [alertIsOpen, setAlertIsOpen] = useState(false);
    const [editFormIsOpen, setEditFormIsOpen] = useState(false);
    const [isEditOperation, setIsEditOperation] = useState(false);

    const [operationComplete, setOperationComplete] = useState(false); // i - initial, s- success, e-error
    const [errorComplete, setErrorComplete] = useState(false); // i - initial, s- success, e-error

    useEffect(() => {
        enqueueSnackbar('Операция выполнена успешно!', { variant: 'success' });
    }, [enqueueSnackbar, operationComplete]);

    useEffect(() => {
        enqueueSnackbar('Ошибка, не удачно!', { variant: 'error' });
    }, [enqueueSnackbar, errorComplete]);
    useEffect(() => {

        getAllUnitsApi().then((data) => {
            setRows(data);
            setLoading(false);
        });

    }, []);

    const getRowIdGetter = (params: GridRowParams, event: MuiEvent<React.MouseEvent>, details: GridCallbackDetails) => {
        console.log(params.id);
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

    const alertAccept = () => {

        setAlertIsOpen(false);
        setLoading(true);

        deleteByIdApi(currRow).then(() => {
            getAllUnitsApi().then((data) => {
                setRows(data)
                setOperationComplete(!operationComplete);
            });
        }, () => setErrorComplete(!errorComplete)).finally(() => setLoading(false));

    };
    const editAccept = async (d: any) => {

        setEditFormIsOpen(false);
        setLoading(true);

        !isEditOperation && delete d.id;

        (isEditOperation ? updateByIdApi(d) : createUnitApi(d)).then(() => {
            getAllUnitsApi().then((data: any) => {
                setRows(data)
                setOperationComplete(!operationComplete);
            });
        }, () => setErrorComplete(!errorComplete)).finally(() => {
            setLoading(false);
        });
    };

    console.log("Rendering....");
    return (
        <div style={{ height: "auto" }} >
            <Typography variant="h4" gutterBottom component="div">Единицы измерения</Typography>
            <ActionsPanel OnClickAdd={addHandler} OnClickEdit={editHandler} OnClickDelete={() => setAlertIsOpen(true)} />
            {
                loading ? <SpinnerItem top={'50px'} /> : (<DataGrid onRowClick={getRowIdGetter}
                    style={{ height: window.innerHeight - 300, width: '100%', marginTop: 5 }}
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                />)
            }
            {alertIsOpen && (<DeleteAlertDialog isOpen={alertIsOpen} handleClouse={() => setAlertIsOpen(false)} handleAccept={alertAccept} />)}
            {editFormIsOpen && (<UnitsEditForm id={currRow} isOpen={editFormIsOpen} isEdit={isEditOperation} handleClouse={() => setEditFormIsOpen(false)} handleAccept={editAccept} />)}
        </div >
    );
};

export default UnitsList;