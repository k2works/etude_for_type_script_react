import * as React from 'react';
import { ITodoState } from '../../types/todo';
import Todo from './Todo';

interface IOwnProps {
    todos: ITodoState[];
    toggleTodo: (id: number) => any;
}

function handleClick(toggleTodo: (id: number) => void, id: number) {
    return () => toggleTodo(id);
}

const TodoList: React.SFC<IOwnProps> = (props) => {
    const { todos, toggleTodo } = props;

    return (
        <ul>
            {todos.map(todo =>
                <Todo
                    key={todo.id}
                    {...todo}
                    onClick={handleClick(toggleTodo,todo.id)}
                />
            )}
        </ul>
    );
};


export default TodoList;
