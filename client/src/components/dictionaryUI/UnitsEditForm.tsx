import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from '@mui/material';
import React from 'react';
import { IDialog } from '../../types/types';

const UnitsEditForm = (props: IDialog) => {
    return (
        <div>
            <Dialog open={props.isOpen}>
                <DialogTitle>{props.isEdit ? "Редактировать" : "Создать"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClouse}>Cancel</Button>
                    <Button onClick={props.handleAccept}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default UnitsEditForm;