import { ButtonGroup, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import React from 'react';

interface IActionsPanel {
    OnClickAdd?: React.MouseEventHandler<HTMLButtonElement>;
    OnClickEdit?: React.MouseEventHandler<HTMLButtonElement>;
    OnClickDelete?: React.MouseEventHandler<HTMLButtonElement>;
}

const ActionsPanel = (props: IActionsPanel) => {
    return (
        <div>
            <ButtonGroup>
                <Button sx={{ m: 2 }} variant="contained" onClick={props.OnClickAdd} color="success" startIcon={<AddIcon />}>Создать</Button>
                <Button sx={{ m: 2 }} variant="text" onClick={props.OnClickEdit} startIcon={<EditIcon />}>Изменить</Button>
                <Button sx={{ m: 2 }} variant="text" onClick={props.OnClickDelete} color="error" startIcon={<DeleteIcon />}>Удалить</Button>
            </ButtonGroup>
        </div>
    );
};

export default ActionsPanel;