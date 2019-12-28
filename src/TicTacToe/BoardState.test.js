import { BoardState } from './BoardState';

describe('Board State model class', () => {

    it('blank has status X', () =>{
        const board = BoardState.Blank();
        expect(board.winner).toEqual(null);
        expect(board.xIsNext).toEqual(true);
        expect(board.status()).toEqual('Næste spiller: X');
    })

    it('second has status O', () =>{
        let board = BoardState.Blank();
        board = board.play(0);
        expect(board.winner).toEqual(null);
        expect(board.xIsNext).toEqual(false);
        expect(board.status()).toEqual('Næste spiller: O');
    })

    it('has status Z won', () =>{
        const board = new BoardState(['Z', 'Z', 'Z', 'd', 'e', 'f', 'g', 'h', 'i'], false);
        expect(board.winner).toEqual('Z');
        expect(board.status()).toEqual('Vinderen er: Z');
    })

})