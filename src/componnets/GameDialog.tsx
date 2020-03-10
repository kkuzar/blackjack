import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Button, createStyles, Grid, Theme} from "@material-ui/core";
import {closeDialogAction, openDialogAction} from "../actions/gameAction";
import {connect} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme: Theme) => createStyles(
    {
        lose: {
            backgroundColor: theme.palette.error.main,
        },
        win: {
            backgroundColor: theme.palette.success.main,
        },
        push: {
            backgroundColor: theme.palette.text.disabled,
        }
    }
));


const mapStateToProps = (state) => {
    return {
        title: state.dialog.title,
        bodyMsg: state.dialog.bodyMsg,
        colorStyle: state.dialog.colorStyle,
        open: state.dialog.open
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        openD: (in_title, in_body) => dispatch(openDialogAction(in_title, in_body)),
        closeD: () => dispatch(closeDialogAction()),
    }
};


function GameDialog(props) {

    const classes = useStyles();
    const openD = props.openD;
    const closeD = props.closeD;

    const isOpen = props.open;
    const dialogTitle = props.title;
    const bodyMsg = props.bodyMsg;

    const stl = props.colorStyle;

    const titleColor = (classes, stl)  => {
            
    };


    return (
        <Dialog
            open={isOpen}
            onClose={() => closeD()}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth={"sm"}
            fullWidth={true}
        >
            <DialogTitle className={classes.push} id="alert-dialog-title">{dialogTitle}</DialogTitle>
            <DialogContent >
                <DialogContentText id="alert-dialog-description">
                    {bodyMsg}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => closeD()} color="primary" autoFocus>
                    Okay
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(GameDialog)
