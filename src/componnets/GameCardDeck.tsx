import React, {Component, Fragment} from 'react'
import {Container, createStyles, Divider, Grid, Paper, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {CardType, CardFaces, CLUBS, DIAMONDS, HEARTS} from "../constants";
import GameCard from "./GameCard";

const useStyles = makeStyles((theme: Theme) => createStyles(
    {
        playerrack: {
            minHeight: 220,
            margin: '5px 0 5px 0',
            backgroundColor: 'rgba(50, 115, 220, 0.2)'
        },
        houserack: {
            minHeight: 220,
            backgroundColor: 'rgba(0, 0, 0, 0.2)'
        }
    }
));

export default function GameCardDeck() {
    const classes = useStyles();

    return (
        <Fragment>
                <Grid container
                      spacing={1}
                      justify="center"
                      className={classes.houserack}
                      alignItems="center">

                    <Grid item><GameCard name={CLUBS} value={11}/></Grid>
                    <Grid item><GameCard name={null} value={1}/></Grid>
                </Grid>
                <Divider variant="middle" />
                <Grid container
                      spacing={1}
                      justify="center"
                      className={classes.playerrack}
                      alignItems="center">

                    <Grid item><GameCard name={DIAMONDS} value={11}/></Grid>
                    <Grid item><GameCard name={HEARTS} value={1}/></Grid>
                </Grid>
        </Fragment>
);
}
