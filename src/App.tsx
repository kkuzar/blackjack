import React from 'react';
import logo from './logo.svg';
import card from './img/cardpng/ace_of_spades.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={card} className="App-logo" alt="logo" />
        <p>
          A BlackJack Game with React
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start the Game
        </a>
      </header>
    </div>
  );
}

export default App;
