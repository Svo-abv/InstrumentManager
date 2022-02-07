import { Typography } from '@mui/material';
import { GridColDef, DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { getAllDocPaymentsApi } from '../../httpApi/DocumentPaymentApi';
import ActionsPanel from '../ActionsPanel';
import SpinnerItem from '../SpinnerItem';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'Код', width: 100 },
    { field: 'statusId', headerName: 'Статус', width: 100 },
    { field: 'date', type: "date", headerName: 'Дата', width: 100 },
    { field: 'typeId', headerName: 'Тип', width: 100 },
    { field: 'organizationId', headerName: 'Организация', width: 200 },
    { field: 'clientId', headerName: 'Клиент', width: 200 },
    { field: 'userId', headerName: 'Пользователь', width: 200 },
    { field: 'summ', type: "number", headerName: 'Сумма', width: 100 },
    { field: 'comment', headerName: 'Комментарий', width: 250 },
];

const DocumentPymentList = () => {
    const [rows, setRows] = useState<any>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        getAllDocPaymentsApi().then((data) => {
            setRows(data);
            setLoading(false);
        });

    }, []);

    return (
        <div style={{ height: "auto" }} >
            <Typography variant="h4" gutterBottom component="div">Движения</Typography>
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

export default DocumentPymentList;