import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";
import { Dispatch } from 'redux';
import { TodoActions, toggleTodo} from '../../actions/todo';
import TodoList from '../../components/todo/TodoList';
import {VisibilityFilters} from "../../constants/todo";
import { IState, ITodoState } from '../../state/todo';

interface IStateToProps {
    todos: ITodoState[];
}

interface IDispatchToProps {
    toggleTodo: (id: number) => any;
}

const getVisibleTodo = (todos: ITodoState[], filter: VisibilityFilters): ITodoState[] => {
    switch (filter)  {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        default:
            throw new Error('Unknown filter: ' + filter);
    }
};

const mapStateToProps = (state: IState): IStateToProps => ({
    todos: getVisibleTodo(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch: Dispatch<TodoActions>): IDispatchToProps => ({
    toggleTodo: (id: number) => dispatch(toggleTodo(id))
});

export default withRouter<any>(connect<any>(
    mapStateToProps,
    mapDispatchToProps
)(TodoList));
