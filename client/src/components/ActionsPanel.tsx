import { ButtonGroup, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import React from 'react';

const ActionsPanel = () => {
    return (
        <div>
            <ButtonGroup>
                <Button sx={{ m: 2 }} variant="contained" color="success" startIcon={<AddIcon />}>Создать</Button>
                <Button sx={{ m: 2 }} variant="text" startIcon={<EditIcon />}>Изменить</Button>
                <Button sx={{ m: 2 }} variant="text" color="error" startIcon={<DeleteIcon />}>Удалить</Button>
            </ButtonGroup>
        </div>
    );
};

export default ActionsPanel;