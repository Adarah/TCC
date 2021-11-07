import React, {ChangeEvent, useState} from "react";
import {
    Button, CardActions,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Snackbar,
    TextField,
} from "@material-ui/core";

import firebase from "firebase";

export default function ForgotPasswordButton() {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState("");

    const [toastOpen, setToastOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = async () => {
        console.log("sending email to: ", email);
        try {
            await firebase.auth().sendPasswordResetEmail(email);
            setOpen(false);
            setToastOpen(true);
            setToastMessage("Password reset email sent!");
        } catch (error) {
            setToastOpen(true);
            // @ts-ignore
            setToastMessage(error.message);
        }
    };

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const email = event.currentTarget.value;
        setEmail(email);
    };

    const handleToastClose = () => {
        setToastOpen(false);
        setToastOpen(false);
    };

    return (
        <div>
            <CardActions>
                <Button variant="contained" onClick={handleClickOpen} className="RaLoginForm-button-10">
                    Forgot Password?
                </Button>
            </CardActions>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Send Password Reset?</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        A password reset will be sent to the following email:
                    </DialogContentText>
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        type="email"
                        variant="outlined"
                        style={{width: '100%'}}
                        onChange={handleOnChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit} color="primary" autoFocus>
                        Send Email
                    </Button>
                </DialogActions>
            </Dialog>
            <Snackbar
                open={toastOpen}
                onClose={handleToastClose}
                autoHideDuration={6000}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
                message={toastMessage}
            />
        </div>
    );
}
