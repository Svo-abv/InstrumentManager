import { Typography } from '@mui/material';
import { GridColDef, DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { getAllOrgApi } from '../../httpApi/OrganizationsApi';
import ActionsPanel from '../ActionsPanel';
import SpinnerItem from '../SpinnerItem';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'Номер', width: 100 },
    { field: 'name', headerName: 'Наименование', width: 250 },
    { field: 'address', headerName: 'Адрес', width: 250 },
    { field: 'inn', headerName: 'ИНН', width: 110 },
    { field: 'kpp', headerName: 'КПП', width: 110 }
];

const OrganizationList = () => {
    const [rows, setRows] = useState<any>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        getAllOrgApi().then((data) => {
            setRows(data);
            setLoading(false);
        });

    }, []);

    return (
        <div style={{ height: "auto" }} >
            <Typography variant="h4" gutterBottom component="div">Организации</Typography>
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

export default OrganizationList;