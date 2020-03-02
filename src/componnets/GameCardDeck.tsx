import React, {Component, Fragment} from 'react'
import {
    Box,
    Card,
    CardContent,
    Container,
    createStyles,
    Divider,
    Grid,
    Paper,
    Theme,
    Typography
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {CardDeck, CardRack, CardType} from "../constants";
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
        },
        score: {

            backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }
    }
));

const tranlateNumber2Card = (input)  => {
    let {h, p}= input;

    const house =  h.map(function (value,index) {
        let isBack = false;
        if (index === 0 ) isBack = true;
        let e = CardDeck[value];
        return {
            name: e.name,
            isBack : isBack,
            value : e.value

        }
    });

    const player =  p.map(function (value) {
        let e = CardDeck[value];
        return {
            name: e.name,
            isBack: false,
            value : e.value
        }
    })

    return {
        house: house,
        player: player
    }
};

function scoreBoard(color, num, classname, role = 'house') {
    return (
        <Grid item>
            <Card className={classname}>
                <CardContent>
                    <Grid
                        justify="center"
                    >
                        <Typography >
                            <Box  fontWeight={500} color={color}> {role} : { num }</Box>
                        </Typography>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    )
}


export default function GameCardDeck(props) {
    const classes = useStyles();
    let playerHand = 0, househand = 0;

    const { house , player } = tranlateNumber2Card(props);
    const addReducer = (accumulator, currentValue) => accumulator + currentValue;
    playerHand = player.map((e) => {return e.value}).reduce(addReducer);
    househand = house.map((e) => {
        if (!e.isBack) {
            return e.value;
        } else {
            return 0;
        }
    }).reduce(addReducer);

    return (
        <Fragment>
                <Grid container
                      spacing={1}
                      justify="center"
                      className={classes.houserack}
                      alignItems="center">

                    { house.map((e,i) => {
                        return <Grid key={i} item><GameCard  name={e.name} value={e.value} isBack={e.isBack}/></Grid>
                    })}

                    {scoreBoard("secondary.main", househand, classes.score) }

                </Grid>
                <Divider variant="middle" />
                <Grid container
                      spacing={1}
                      justify="center"
                      className={classes.playerrack}
                      alignItems="center">

                    { player.map((e,i) => {
                        return <Grid  key={i} item><GameCard  name={e.name} value={e.value} isBack={false}/></Grid>
                    })}

                    {scoreBoard("success.main", playerHand, classes.score, "Your Hand ") }

                </Grid>
        </Fragment>
);
}
