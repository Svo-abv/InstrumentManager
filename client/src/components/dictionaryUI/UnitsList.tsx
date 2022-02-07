import { Typography } from '@mui/material';
import { GridColDef, DataGrid, GridRowParams, MuiEvent, GridCallbackDetails } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { deleteByIdApi, getAllUnitsApi } from '../../httpApi/UnitsApi';
import ActionsPanel from '../ActionsPanel';
import DeleteAlerDialog from '../DeleteAlerDialog';
import SpinnerItem from '../SpinnerItem';
import { useSnackbar } from 'notistack';

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
    const [operationComplete, setOperationComplete] = useState("i");


    useEffect(() => {
        if (operationComplete === "s")
            enqueueSnackbar('Операция выполнена успешно!', { variant: 'success' });
        else if (operationComplete !== "i")
            enqueueSnackbar('Ошибка, не удачно!', { variant: 'error' });

    }, [enqueueSnackbar, operationComplete]);

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

    }
    const addHandler = () => {

    }
    const alertAccept = () => {

        setAlertIsOpen(false);
        setOperationComplete("e");
        setLoading(true);

        deleteByIdApi(currRow).then(() => {
            getAllUnitsApi().then((data) => {
                setRows(data)
                setOperationComplete("s");
            })
        }).finally(() => {
            setLoading(false);
        });

    };
    console.log("Rendering....");
    return (
        <div style={{ height: "auto" }} >
            <DeleteAlerDialog isOpen={alertIsOpen} handleClouse={() => setAlertIsOpen(false)} handleAccept={alertAccept} />
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
        </div >
    );
};

export default UnitsList;