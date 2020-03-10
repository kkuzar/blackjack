import React from 'react'
import {
    CardActions,
    createStyles,
    Grid,
    Theme,
    ButtonGroup,
    Button,
    CardContent,
    Box,
    Typography
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import {connect} from "react-redux";
import {
    betDownAction,
    doubleAction,
    GameOverAction,
    giveCardActionn,
    hitAction,
    turnFaceAction
} from "../actions/gameAction";
import {HIT_CARD, STAND_CARD} from "../constants";

const useStyles = makeStyles((theme: Theme) => createStyles(
    {
        gamepannel: {
            marginTop: 10,
            marginBottom: 10,
            padding: 10
        },
        dealbtn: {
            background: 'linear-gradient(#e66465, #9198e5)'
        },
        hitbtn: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
        },
        standbtn: {
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'
        },
       playermoney: {
            fontcolor(color: string): string {
              return "red"
            }
       }
    }
));

const mapStateToProps = (state) => {

    return {
        cash: state.game.cash,
        betin: state.game.betin,
        isDealAva: state.game.isDealAva,
        isHitAva: state.game.isHitAva,
        isStandAva: state.game.isStandAva,
        isBetAva: state.game.isBetAva,
        isDoubleAva: state.game.isDoubleAva,
        isSpliceAva: state.game.isSpliceAva,
        cards: state.game.cards,
        scores: state.game.scores,
        isNewGameAva: state.game.isNewGameAva,
        turnsto: null,
    }
};

// @ts-ignore
const mapDispatchToProps = (dispatch) => {
    return {
        betDown: num => dispatch(betDownAction(num)),
        giveCard: () => dispatch(giveCardActionn()),
        turnFace: (nextact) => dispatch(turnFaceAction(nextact)),
        hitCard: () => dispatch(hitAction()),
        doubleIt: () => dispatch(doubleAction()),
    }
};

const GamePannel: React.FC = (props: any) => {

    // @ts-ignore
    const classes = useStyles();
    const betAction = props.betDown;
    const turnFace = props.turnFace;
    const hitCard = props.hitCard;
    const doubleIt = props.doubleIt;

    return (
        <Card>
            <CardContent>
                <Grid
                    justify="space-between"
                    container
                >
                    <Grid item>
                        <Typography component={'div'} >
                            <Box color="success.main"> Your Money: {props.cash} €</Box>

                        </Typography>
                    </Grid>

                    <Grid item>
                        <Typography component={'span'}>
                            <Box color="info.main"> Bet in Game: {props.betin} €</Box>
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>

            <CardActions className={classes.gamepannel}>
                <Grid container>
                    <Grid item xs>
                        <Button fullWidth={true}
                                variant="contained"
                                className={classes.dealbtn}
                                disabled={!props.isDealAva}
                                onClick={props.giveCard}>
                            DEAL
                        </Button>
                    </Grid>
                </Grid>
            </CardActions>

            <CardActions className={classes.gamepannel}>
                <ButtonGroup size="large"
                             color="primary"
                             aria-label="large outlined primary button group"
                             disabled={!props.isBetAva}>
                    <Button onClick={() => betAction(5)}>5$</Button>
                    <Button onClick={() => betAction(10)}>10$</Button>
                    <Button onClick={() => betAction(25)}>25$</Button>
                    <Button onClick={() => betAction(50)}>50$</Button>
                    <Button onClick={() => betAction(100)}>100$</Button>
                    <Button onClick={() => betAction(500)}>500$</Button>
                </ButtonGroup>
            </CardActions>

            <CardActions className={classes.gamepannel}>

                <Grid container
                      spacing={1}>

                    <Grid item>
                        <Button variant="contained"
                                onClick={hitCard}
                                disabled={!props.isHitAva} className={classes.hitbtn}>
                            HIT
                        </Button>
                    </Grid>

                    <Grid item>
                        <Button variant="contained"
                                onClick={() => turnFace(STAND_CARD)}
                                disabled={!props.isStandAva}
                                className={classes.standbtn}>
                            STAND
                        </Button>
                    </Grid>

                    <Grid item>
                        <Button variant="contained"
                                onClick={doubleIt}
                                disabled={!props.isDoubleAva}>
                            DOUBLE
                        </Button>
                    </Grid>

                    {/*<Grid item>*/}
                    {/*    <Button variant="contained" onClick={() => restart} disabled={!props.isNewGameAva}>*/}
                    {/*        NEW GAME*/}
                    {/*    </Button>*/}
                    {/*</Grid>*/}
                </Grid>
            </CardActions>
        </Card>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePannel);
