import * as constants from '../constants/todo';

export interface IAddTodo {
    type: constants.ADD_TODO;
    text: string;
}

export interface IToggleTodo {
    type: constants.TOGGLE_TODO;
    index: number;
}

export interface ISetVisibilityFilter {
    type: constants.SET_VISIBILITY_FILTER;
    filter: any;
}

export function addTodo(text: string): IAddTodo {
    return { type: constants.ADD_TODO, text}
}

export function toggleTodo(index: number): IToggleTodo {
    return { type: constants.TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter: any): ISetVisibilityFilter {
    return { type: constants.SET_VISIBILITY_FILTER, filter}
}
