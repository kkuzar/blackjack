import React, {Fragment} from 'react'
import {
    Box,
    Card,
    CardContent,
    createStyles,
    Grid,
    Theme,
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {BET_DOWN, GAME_STARTED, GeneratedCardNumber, GIVE_CARD, HIT_CARD} from "../constants";
import GameCard from "./GameCard";
import {connect} from "react-redux";
import {calcAndUpdateScore, tranlateNumber2Card} from "../gameLogic";
import { updateScoreAction} from "../actions/gameAction";


const useStyles = makeStyles((theme: Theme) => createStyles(
    {
        playerrack: {
            minHeight: 220,
            margin: '5px 0 5px 0',
            backgroundColor: 'rgba(50, 115, 220, 0.2)'
        },
        houserack: {
            minHeight: 220,
            margin: '5px 0 5px 0',
            backgroundColor: 'rgba(0, 0, 0, 0.2)'
        },
        score: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }
    }
));

const mapStateToProps = (state) => {
    // console.log(state.game.scores);
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
        scores: state.game.scores,
        turnsto: null,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        udpateScore: (house, player) => dispatch(updateScoreAction(house, player)),
    }
};

const scoreBoard = (color, num, classname, boardString = 'house') => {
    return (
        <Grid item>
            <Card className={classname}>
                <CardContent>
                    <Box fontWeight={500} color={color}> {boardString} : <strong>{num}</strong> </Box>
                </CardContent>
            </Card>
        </Grid>
    )
};

const RackElement = (styleClass, propsContext, role: string = 'house') => {
    const caseWhenHideCardFace = [GAME_STARTED, BET_DOWN, GIVE_CARD, HIT_CARD];
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

export default connect(mapStateToProps,mapDispatchToProps)(GameCardDeck);
