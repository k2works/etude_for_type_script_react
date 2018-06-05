import * as React from 'react'
import AddTodo from '../../containers/todo/AddTodo'
import VisibleTodoList from '../../containers/todo/VisibleTodoList'
import Footer from './Footer'
​
const TodoApp: React.SFC = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);
​
export default TodoApp
