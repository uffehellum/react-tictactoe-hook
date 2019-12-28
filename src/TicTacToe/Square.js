import React from 'react';

export function Square({ mark, canPlay, play }) {
    const style = { cursor: canPlay ? 'cell' : 'not-allowed' };
    return (
        <button className="square"
            onClick={() => play()}
            style={style}>
            {mark}
        </button>
    );
}