import React from 'react'
import {Theme, createStyles} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import {CardType, CardFaces} from "../constants";


const useStyles = makeStyles((theme: Theme) => createStyles(
    {
        gamecard: {
            minWidth: 100,
            maxWidth: 130,
            objectFit: "contain"
        },
    }
));

function getCardFace(prop: CardType) : string {
    switch (prop.name) {
        case "clubs":
            // @ts-ignore
            return CardFaces[`C${prop.value}`];
        case "diamonds":
            // @ts-ignore
            return CardFaces[`D${prop.value}`];
        case "hearts":
            // @ts-ignore
            return CardFaces[`H${prop.value}`];
        case "spades":
            // @ts-ignore
            return CardFaces[`S${prop.value}`];
        default:
            return CardFaces["BG"];
    }
};


export default function GameCard(props: CardType) {

    if (props.value > 13 || props.value < 0) {
        throw new Error(`card value is inValid! [ value:  ${props.value} ]`)
    }

    const classes = useStyles();
    const face = getCardFace(props);
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
