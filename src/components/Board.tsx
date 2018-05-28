import * as React from "react";
import Square from "./Square";

interface IBoardProps {
    squares: Array<('O' | 'X' | null)>;
    onClick: (i: number) => void;
}

class Board extends React.Component<IBoardProps, any> {
    public render() {
        return (
            <div>
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
            value={this.props.squares[i]}
            onClick={this.onClick(i)}
        />;
    }

    private onClick(i: number) {
        return () => this.props.onClick(i);
    }
}

export default Board;
