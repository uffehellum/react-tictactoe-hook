export class BoardState {
    constructor(marks, xIsNext) {
        this.marks = marks;
        this.xIsNext = xIsNext;
        this.winner = _calculateWinner(marks);
    }

    static Blank = () => new BoardState(Array(9).fill(null), true);

    status() {
        if (this.winner)
            return "Vinderen er: " + this.winner;
        return "Næste spiller: " + (this.xIsNext ? 'X' : 'O');
    }

    canPlay = (i) => this.winner == null && this.marks[i] == null;
    play(i) {
        if (!this.canPlay(i))
            return this;
        const a = [...this.marks];
        a[i] = this.xIsNext ? 'X' : 'O';
        return new BoardState(a, !this.xIsNext);
    }
}

function _calculateWinner(marks) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (const line of lines) {
        const [a, b, c] = line;
        if (marks[a] && marks[a] === marks[b] && marks[a] === marks[c]) {
            return marks[a];
        }
    }
    return null;
}
