import { Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { getAllClientsApi } from '../../httpApi/ClietsApi';
import ActionsPanel from '../ActionsPanel';
import SpinnerItem from '../SpinnerItem';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'Номер', width: 100 },
    { field: 'name', headerName: 'Наименование', width: 250 },
    { field: 'address', headerName: 'Адрес', width: 250 },
    { field: 'tel', headerName: 'Телефон', width: 110 }
];

const ClientsList = () => {
    const [rows, setRows] = useState<any>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        getAllClientsApi().then((data) => {
            setRows(data);
            setLoading(false);
        });

    }, []);

    return (
        <div style={{ height: "auto" }} >
            <Typography variant="h4" gutterBottom component="div">Клиенты</Typography>
            <ActionsPanel />
            {
                loading ? <SpinnerItem top={'50px'} /> : (<DataGrid
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

export default ClientsList;