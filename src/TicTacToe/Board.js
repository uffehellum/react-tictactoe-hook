import React from 'react';
import { Square } from './Square';

export function Board({board, canPlay, play}) {

    const renderSquare = (i) => 
        <Square 
            mark={board.marks[i]} 
            canPlay={canPlay(i)}
            play={() => play(i)}
            />;

    return (
        <div>
        <div className="status">{board.status()}</div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    );
}

