import React, {Fragment, useEffect, useRef, useState} from 'react'
import {
    Box,
    Card,
    CardContent,
    createStyles,
    Divider,
    Grid,
    Theme,
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {BET_DOWN, GAME_STARTED, GeneratedCardNumber, GIVE_CARD} from "../constants";
import GameCard from "./GameCard";
import {connect} from "react-redux";
import {calcAndUpdateScore, tranlateNumber2Card} from "../gameLogic";


const useDidUpdate = (callback, deps) => {
    const hasMount = useRef(false);

    useEffect(() => {
        if (hasMount.current) {
            callback()
        } else {
            hasMount.current = true
        }
    }, deps)
};

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
        },
        score: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }
    }
));

const mapStateToProps = (state) => {
    return {
        type: state.game.type,
        cash: state.game.cash,
        betin: state.game.betin,
        isDealAva: state.game.isDealAva,
        isHitAva: state.game.isHitAva,
        isStandAva: state.game.isStandAva,
        isBetAva: state.game.isBetAva,
        isDoubleAva: state.game.isDoubleAva,
        isSpliceAva: state.game.isSpliceAva,
        cards: state.game.cards,
        deck: state.game.deck,
        scores: state.game.scores
    }
};


const scoreBoard = (color, num, classname, boardString = 'house') => {
    return (
        <Grid item>
            <Card className={classname}>
                <CardContent>
                    {/*<Grid*/}
                    {/*>*/}
                    {/*    <Typography>*/}
                    <Box fontWeight={500} color={color}> {boardString} : <strong>{num}</strong> </Box>
                    {/*</Typography>*/}
                    {/*</Grid>*/}
                </CardContent>
            </Card>
        </Grid>
    )
};

const RackElement = (styleClass, propsContext, role: string = 'house') => {
    const caseWhenHideCardFace = [GAME_STARTED, BET_DOWN, GIVE_CARD];
    const cardrack: GeneratedCardNumber = propsContext.cards;
    const {house, player} = tranlateNumber2Card(cardrack, (!caseWhenHideCardFace.includes(propsContext.type)));

    // nothing to render when card rack is empty (on initial state)
    if (!(house.length && player.length)) return;

    const {househand, playerhand} = calcAndUpdateScore(house, player);

    if (role === 'house') {
        return (
            <Fragment>
                {house.map((e, i) => {
                    return <Grid key={i} item><GameCard name={e.name} value={e.value} isBack={e.isBack}/></Grid>
                })}
                {scoreBoard("secondary.main", househand, styleClass)}
            </Fragment>
        )
    }
    if (role === 'player') {
        return (
            <Fragment>
                {player.map((e, i) => {
                    return <Grid key={i} item><GameCard name={e.name} value={e.value} isBack={false}/></Grid>
                })}
                {scoreBoard("success.main", playerhand, styleClass, "Your Hand ")}
            </Fragment>
        )
    }
    return;
};

const GameCardDeck = (props) => {
    const classes = useStyles();

    return (
        <Fragment>
            <Grid container
                  spacing={1}
                  justify="center"
                  className={classes.houserack}
                  alignItems="center">

                {RackElement(classes.score, props)}
            </Grid>
            <Divider variant="middle"/>
            <Grid container
                  spacing={1}
                  justify="center"
                  className={classes.playerrack}
                  alignItems="center">

                {RackElement(classes.score, props, 'player')}
            </Grid>
        </Fragment>
    );
};

export default connect(mapStateToProps)(GameCardDeck);
