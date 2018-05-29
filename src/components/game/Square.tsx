import * as React from "react";

export type SquareType = string | null;

interface ISquareProps {
    value: SquareType;
    onClick: ()=> void;
}

function Square(props: ISquareProps) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

export default Square;
