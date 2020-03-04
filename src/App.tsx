import React from 'react';
import './App.css';
import GameTable from "./layouts/GameTable";
import gameStore from "./stores/gameStore";
import {Provider} from 'react-redux'

let gStore = gameStore();

export gStore


export const App = () => {



    return (
      <Provider store={gStore}>
          <div className="App">
              <GameTable />
          </div>
      </Provider>
  );
};

  App;


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
