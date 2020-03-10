import React from 'react'
import {Theme, createStyles} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import {CardType, CardDeck} from "../constants";


const useStyles = makeStyles((theme: Theme) => createStyles(
    {
        gamecard: {
            minWidth: 100,
            maxWidth: 130,
            objectFit: "contain"
        },
    }
));

export default function GameCard(props: CardType) {

    if (props.value > 52 || props.value < 0) {
        throw new Error(`card value is inValid! [ value:  ${props.value} ]`)
    }

    const classes = useStyles();
    let face = props.name;

    if (props.isBack) {
        face = CardDeck[0].name // BG
    }
    return (
        <Card className={classes.gamecard}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image={face}
                >

                </CardMedia>
            </CardActionArea>
        </Card>
    )
}
