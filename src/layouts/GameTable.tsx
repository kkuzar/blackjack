import React, {Fragment, useEffect} from 'react'
import { createStyles, Grid, Paper, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import TableBgImg from '../imgs/assets/table.jpg'
import {connect, useSelector} from "react-redux";
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

function getCards(cards, rackclass) {
    if (cards.h.length && cards.p.length) {
        return ( <GameCardDeck {...cards} />)
    } else {
        return (
            <Fragment>
                <Grid container className={rackclass} alignItems="center"/>
                <Grid container className={rackclass} alignItems="center"/>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.game.cards);
    return {
        cards: state.game.cards,
    }
};

const mapDispatchToProps = dispatch => {
    return {
    }
};

function GameTable(props)  {

    const classes = useStyles();
    const cards = props.cards;

    return (
        <Grid className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs className={classes.header}>
                    <Paper className={classes.paper}> BlackJack | kuzar.fi</Paper>
                </Grid>
            </Grid>

            <Grid container>
                { getCards(  props.cards, classes.rack)}
            </Grid>

            { JSON.stringify(props.cards, null, ' ')}

            <Grid container
                  spacing={1}
                  justify="center"
                  alignItems="center" className={classes.gamepannel}>
                <Grid item>
                    <GamePannel/>
                </Grid>
            </Grid>

        </Grid>);
}


export default connect(mapStateToProps, mapDispatchToProps)(GameTable)
