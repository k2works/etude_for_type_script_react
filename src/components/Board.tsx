import * as React from "react";
import Square from "./Square";
import { SquareType} from "./Square";

interface IBoardState {
    squares:SquareType[];
    xIsNext:boolean;
}

class Board extends React.Component<any, IBoardState> {
    constructor(props: any) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    public render() {
        const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }

    private renderSquare(i: number) {
        return <Square
            value={this.state.squares[i]}
            onClick={this.handleClick(i)}
        />;
    }

    private handleClick(i: number) {
        return () => {
            const squares = this.state.squares.slice();
            squares[i] = 'X';
            this.setState({
                squares,
                xIsNext: !this.state.xIsNext,
            });
        }
    }
}

export default Board;
