import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import React from 'react';
import { IDialog } from '../types/types';

const DeleteAlertDialog = (props: IDialog) => {
    return (
        <div>
            <Dialog
                open={props.isOpen}
                onClose={props.handleClouse}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Подтвердить удаление?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        После удаления данные станут не доступны, вы уверены?.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClouse}>Нет</Button>
                    <Button onClick={props.handleAccept} autoFocus>Да</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default DeleteAlertDialog;