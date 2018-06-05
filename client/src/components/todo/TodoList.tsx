import * as React from 'react';
import {ITodoState} from '../../state/todo';
import Todo from './Todo';

interface IOwnProps {
    todos: ITodoState[];
    toggleTodo: (id: number) => any;
}

const TodoList: React.SFC<IOwnProps> = (props) => {
    const { todos, toggleTodo } = props;

    return (
        <ul>
            {todos.map(todo =>
                <Todo
                    key={todo.id}
                    {...todo}
                    onClick={() => toggleTodo(todo.id)}
                />
            )}
        </ul>
    );
};


export default TodoList;
