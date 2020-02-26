import React from 'react';
import './App.css';
import GameTable from "./layouts/GameTable";
import {makeStyles} from "@material-ui/core/styles";



function App() {
  return (
    <div className="App">
        <GameTable/>
    </div>
  );
}

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
