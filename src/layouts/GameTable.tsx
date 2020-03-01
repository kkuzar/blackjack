import React from 'react'
import {Container, createStyles, Grid, Paper, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import TableBgImg from '../imgs/assets/table.jpg'
import GameCard from "../componnets/GameCard";

import GamePannel from "../componnets/GamePannel";
import GameCardDeck from "../componnets/GameCardDeck";


const useStyles = makeStyles((theme: Theme) => createStyles(
    {
        root: {
            backgroundImage: `url(${TableBgImg})`,
            height: 800,
            objectFit: "scale-down",
            flexGrow: 1,
            marginTop: 5
        },
        header : {
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
        }
    }
));


export default function GameTable() {
    const classes = useStyles();

    return (
        <Grid className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs className={classes.header}>
                    <Paper className={classes.paper}> BlackJack  |  kuzar.fi</Paper>
                </Grid>
            </Grid>

            <Grid container >
                <GameCardDeck/>
            </Grid>

            <Grid container
                  spacing={1}
                  justify="center"
                  alignItems="center" className={classes.gamepannel}>
                <Grid item>
                    <GamePannel />
                </Grid>
            </Grid>

        </Grid>);
}
