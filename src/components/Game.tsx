import * as React from "react";
import Board from "./Board";
import './Game.css';
import {SquareType} from "./Square";

interface IHistoryData {
    squares: Array<('O' | 'X' | null)>;
}

interface IGameState {
    history:IHistoryData[];
    stepNumber:number;
    xIsNext:boolean;
}

class Game extends React.Component<any, IGameState> {
    constructor(props: any) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
        };
    }

    public render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Got to game start';
            return (
                <li key={move}>
                    <button onClick={this.jumpTo(move)}>{desc}</button>
                </li>
            )
        });

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                      squares={current.squares}
                      onClick={this.handleClick()}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }


    private handleClick() {
        return (i: number) => {
            const history = this.state.history;
            const current = history[history.length - 1];
            const squares = current.squares.slice();
            if (calculateWinner(squares) || squares[i]) {
                return;
            }
            squares[i] = this.state.xIsNext ? 'X' : 'O';
            this.setState({
                history: history.concat([{
                    squares,
                }]),
                stepNumber: history.length,
                xIsNext: !this.state.xIsNext,
            });
        }
    }

    private jumpTo(step: number) {
        return () => {
            this.setState({
                stepNumber: step,
                xIsNext: (step % 2) === 0,
            });
        };
    }
}

export default Game;

function calculateWinner(squares: SquareType[]) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 6],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (const line of lines) {
        const [a, b, c] = line;
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
