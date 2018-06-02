import { Action } from 'redux';
import {ActionTypes, VisibilityFilters} from "../constants/todo";

let nextTodoId: number = 0;

interface IAddTodoAction extends Action {
    type: ActionTypes.ADD_TODO;
    payload: {
        id: number;
        text: string;
    };
}

export const addTodo = (text: string): IAddTodoAction => ({
    type: ActionTypes.ADD_TODO,
    payload: {
        id: nextTodoId += 1,
        text,
    }
});


interface ISetVisibilityFilterAction extends Action {
    type: ActionTypes.SET_VISIBILITY_FILTER;
    payload: {
        filter: VisibilityFilters;
    };
}

export const setVisibilityFilter = (filter: VisibilityFilters): ISetVisibilityFilterAction => ({
    type: ActionTypes.SET_VISIBILITY_FILTER,
    payload: { filter },
});


interface IToggleTodoAction extends Action {
    type: ActionTypes.TOGGLE_TODO;
    payload: {
        id: number;
    };
}

export const toggleTodo = (id: number): IToggleTodoAction => ({
    type: ActionTypes.TOGGLE_TODO,
    payload: { id }
});


export type TodoActions = IAddTodoAction | ISetVisibilityFilterAction | IToggleTodoAction;
