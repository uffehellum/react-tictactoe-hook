import React from 'react';
import { render } from '@testing-library/react';
import { Board } from './Board';
import { BoardState } from './BoardState';

test('Board react component', () => {
    const board = new BoardState(['aaa', 'bbb', 'c', 'd', 'e', 'f', 'g', 'h', 'i'], true);
    const p = {
        board,
        canPlay: board.canPlay,
        play: board.play
    };
    const { getByText } = render(<Board {...p} />);
    const cell1 = getByText(/bbb/);
    expect(cell1).toBeInTheDocument();
});