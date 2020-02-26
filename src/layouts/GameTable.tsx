import React from 'react'
import {Container, createStyles, Grid, Paper, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import TableBgImg from '../img/assets/table.jpg'
import GameCard from "../componnets/GameCard";
import {CLUBS, DIAMONDS, HEARTS} from "../constant";


const useStyles = makeStyles((theme: Theme) => createStyles(
    {
        root: {
            backgroundImage: `url(${TableBgImg})`,
            height: 800,
            objectFit: "scale-down",
            flexGrow: 1,
            marginTop: 20
        },
        header : {
            marginTop: 10,
            marginBottom: 10,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            // color: theme.palette.text.secondary,
        },
        papercard: {
            maxWidth: 130

        },
    }
));


export default function GameTable() {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs className={classes.header}>
                    <Paper className={classes.paper}>BlackJack</Paper>
                </Grid>
            </Grid>

            <Grid container
                  spacing={1}
                  justify="center"
                  alignItems="center">

                <Grid item><GameCard name={CLUBS} value={11}/></Grid>
                <Grid item><GameCard name={null} value={1}/></Grid>
            </Grid>

            <Grid container
                  spacing={1}
                  justify="center"
                  alignItems="center">

                <Grid item><GameCard name={DIAMONDS} value={11}/></Grid>
                <Grid item><GameCard name={HEARTS} value={1}/></Grid>
            </Grid>
        </Container>);
}
