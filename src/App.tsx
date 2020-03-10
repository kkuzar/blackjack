import React from 'react';
import './App.css';
import GameTable from "./layouts/GameTable";
import gameStore from "./stores/gameStore";
import {Provider} from 'react-redux'
import {makeStyles} from "@material-ui/core/styles";
import {Container, createStyles, Theme} from "@material-ui/core";
import TableBgImg from "./imgs/assets/pokerbg.svg";

let gStore = gameStore();

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        backgroundImage: `url(${TableBgImg})`,
        objectFit: "scale-down",
        flexGrow: 1,
        minHeight: "100vh",
        minWidth: "100vw",
        marginTop: 5,
        marginBottom: 0,
    }
}));

const App = () => {
    const classes = useStyles();
    return (
      <Provider store={gStore}>

          <Container fixed className={classes.root}>
              <GameTable />
          </Container>
      </Provider>
  );
};

export default App;


// <header className="App-header">
//   <img src={card} className="App-logo" alt="logo" />
//   <p>
//     A BlackJack Game with React
//   </p>
//   <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//   >
//     Start the Game
//   </a>
// </header>
