import React from 'react';
import '../TicTacToe/tictactoe.css';
import { Game } from '../TicTacToe/Game';

export const App = () =>
    <div className="App">
        <header className="App-header">
            <Game />
            <EditAppHintParagraph />
            <hr />
            <LearnReactLink />
        </header>
    </div>


const EditAppHintParagraph = () =>
    <p>
        Rediger <code>src/App/App.js</code> og gem, så genindlæses applikationen automatisk.
  </p>;


const LearnReactLink = () =>
    <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
    >
        Lær dig selv React
  </a>;

