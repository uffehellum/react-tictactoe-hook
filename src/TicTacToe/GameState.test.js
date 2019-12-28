import { GameState } from './GameState';

describe('Game State model class', () => {

    it('Loads a board', () => {
        const game = GameState.Blank();
        expect(game.current).toEqual(0);
        expect(game.history.length).toEqual(1);
        expect(game.canRedo()).toEqual(false);
        expect(game.canUndo()).toEqual(false);
        expect(game.canPlay(0)).toEqual(true);
    })
})