import * as React from 'react';

interface IOwnProps {
    onClick: () => void;
    completed: boolean;
    text: string;
}

const Todo: React.SFC<IOwnProps> = (props) => {
    const { onClick, completed, text } = props;

    return (
        <li
            onClick={onClick}
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}
        >
            {text}
        </li>
    );
};

export default Todo;
