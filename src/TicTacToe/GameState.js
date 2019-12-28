import { BoardState } from './BoardState';

export class GameState {
    constructor(history, current) {
        this.history = history;
        this.current = current;
    }

    static Blank() {
        return new GameState([BoardState.Blank()], 0);
    }

    board = () => this.history[this.current];

    canPlay = (i) => this.board().canPlay(i);

    play(i) {
        if (!this.canPlay(i))
            return this;
        const n = this.current;
        const a = this.history.slice(0, n + 1);
        a.push(a[n].play(i));
        return new GameState(a, n + 1)
    }

    canRedo = () => this.current < this.history.length - 1;
    redo = () => this.canRedo() ? new GameState(this.history, this.current + 1) : this;

    canUndo = () => this.current > 0;
    undo = () => this.canUndo() ? new GameState(this.history, this.current - 1) : this;
}