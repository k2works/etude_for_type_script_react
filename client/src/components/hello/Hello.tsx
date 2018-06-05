import * as React from 'react';
import {IHelloState} from "../../state/hello";
import './Hello.css';

interface IOwnProps {
    enthusiasm: IHelloState
    onIncrement?: () => void;
    onDecrement?: () => void;
}

function Hello( {enthusiasm, onIncrement, onDecrement }: IOwnProps ) {
    if (enthusiasm.enthusiasmLevel <= 0) {
        throw new Error('Your could be a little more enthusiastic. :D');
    }

    return (
        <div className="hello">
            <div className="greeting">
            Hello {enthusiasm.languageName + getExclamationMarks(enthusiasm.enthusiasmLevel)}
            </div>
            <div>
                <button onClick={onDecrement}>-</button>
                <button onClick={onIncrement}>+</button>
            </div>
        </div>
    );
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}
