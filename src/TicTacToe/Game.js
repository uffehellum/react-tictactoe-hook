import React, { useState } from 'react';
import { Board } from './Board';
import { GameState } from './GameState';

export function Game () {
    const [game, setGame] = useState(GameState.Blank());
    const play = (i) => setGame(game.play(i));
    const undo = () => setGame(game.undo());
    const redo = () => setGame(game.redo());

    return (
        <div>
          <Board board={game.board()} canPlay={game.canPlay} play={play}/>
          <button onClick={undo} disabled={!game.canUndo()}>Fortryd</button>
          <button onClick={redo} disabled={!game.canRedo()}>Genspil</button>
        </div>
      );
} 