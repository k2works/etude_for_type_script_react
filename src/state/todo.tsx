import {VisibilityFilters} from "../constants/todo";

export interface IState {
    readonly visibilityFilter: VisibilityFilters;
    readonly todos: ITodoState[];
}

export interface ITodoState {
    readonly id: number;
    readonly text: string;
    readonly completed: boolean;
}
