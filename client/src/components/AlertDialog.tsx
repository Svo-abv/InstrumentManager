import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import React from 'react';

interface IAlertDialog {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AlertDialog = (props: IAlertDialog) => {

    return (
        <div>
            <Dialog
                open={props.open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Ошибка"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Не верно указаны логин или пароль!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => props.setOpen(false)} autoFocus>
                        ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default AlertDialog;