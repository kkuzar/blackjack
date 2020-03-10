import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Button, createStyles, Theme} from "@material-ui/core";
import {closeDialogAction, openDialogAction} from "../actions/gameAction";
import {connect} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import {BUST_CARD, PUSH_CARD, WIN_CARD} from "../constants";


const useStyles = makeStyles((theme: Theme) => createStyles(
    {
        lose: {
            backgroundColor: theme.palette.error.main,
        },
        win: {
            backgroundColor: theme.palette.success.main,
        },
        grey: {
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

const getTitleColor = (classes, stl)  => {
    switch (stl) {
        case WIN_CARD:
            return classes.win;
        case BUST_CARD:
            return classes.lose;
        case PUSH_CARD:
        default:
            return classes.grey;
    }
};


function GameDialog(props) {

    const titleColor = getTitleColor(useStyles(), props.colorStyle);

    const closeD = props.closeD;

    const isOpen = props.open;
    const dialogTitle = props.title;
    const bodyMsg = props.bodyMsg;

    return (
        <Dialog
            open={isOpen}
            onClose={() => closeD()}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth={"sm"}
        >
            <DialogTitle className={titleColor} id="alert-dialog-title">{dialogTitle}</DialogTitle>
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
