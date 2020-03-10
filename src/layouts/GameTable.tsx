import React from 'react'
import {Button, createStyles, Grid, Paper, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import GamePannel from "../componnets/GamePannel";
import GameCardDeck from "../componnets/GameCardDeck";
import GameDialog from "../componnets/GameDialog";
import {closeDialogAction, openDialogAction} from "../actions/gameAction";
import {connect} from "react-redux";


const useStyles = makeStyles((theme: Theme) => createStyles(
    {
        header: {
            marginTop: 10,
            marginBottom: 10,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.5)'
            // color: theme.palette.text.secondary,
        },
        papercard: {
            maxWidth: 130
        },
        gamepannel: {
            marginTop: 20,
            marginBottom: 0,
        },
        rack: {
            minHeight: 220,
            backgroundColor: 'rgba(0, 0, 0, 0.2)'
        },
    }
));

const mapStateToProps = (state) => {
    return {
        title: state.dialog.title,
        bodyMsg: state.dialog.bodyMsg,
        open: state.dialog.open
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        openD: (in_title, in_body) => dispatch(openDialogAction(in_title, in_body)),
        closeD: () => dispatch(closeDialogAction()),
    }
};

function GameTable(props)  {

    const classes = useStyles();
    const openD = props.openD;

    return (
        <Grid  >
            <Grid container spacing={3}>
                <Grid item xs className={classes.header}>
                    <Paper className={classes.paper}> BlackJack | kuzar.fi</Paper>
                </Grid>
            </Grid>

            <Grid container>
                <GameCardDeck/>
            </Grid>

            <Grid container
                  spacing={1}
                  justify="center"
                  alignItems="center" className={classes.gamepannel}>
                <Grid item>
                    <GamePannel/>
                </Grid>
            </Grid>

            <GameDialog/>
            {/*<Button onClick={() => openD("test", "test again")} >test</Button>*/}
        </Grid>);
}

export default connect(mapStateToProps,mapDispatchToProps)(GameTable);
