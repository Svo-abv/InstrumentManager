import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import React from 'react';

interface IDeleteAlerDialog {
    isOpen: boolean;
    //handleClouse: ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void) | undefined;
    handleClouse: React.MouseEventHandler<HTMLButtonElement>;
    handleAccept: React.MouseEventHandler<HTMLButtonElement>;
}
const DeleteAlerDialog = (props: IDeleteAlerDialog) => {
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

export default DeleteAlerDialog;