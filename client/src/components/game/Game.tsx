import * as React from "react";
import { IHistoryData, IState } from "../../state/game";
import Board from "./Board";
import './Game.css';
import {SquareType} from "./Square";

export interface IOwnProps {
    games: IState;
    jumpTo: (move: number) => void;
    handleClick: (history: IHistoryData[], square: any) => void;
}

export class Game extends React.Component<IOwnProps, IState> {
    public render() {
        const history = this.props.games.history;
        const current = history[this.props.games.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step: any, move: any) => {
            const desc = move ?
                'Go to move #' + move :
                'Got to game start';
            return (
                <li key={move}>
                    <button onClick={() => this.props.jumpTo(move)}>{desc}</button>
                </li>
            )
        });

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.props.games.xIsNext ? 'X' : 'O');
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
            const history = this.props.games.history;
            const current = history[history.length - 1];
            const squares = current.squares.slice();
            if (calculateWinner(squares) || squares[i]) {
                return;
            }
            squares[i] = this.props.games.xIsNext ? 'X' : 'O';
            this.props.handleClick(history, squares);
        }
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
