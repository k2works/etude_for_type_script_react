import {VisibilityFilters} from "../constants/todo";

export interface IStoreState {
    readonly visibilityFilter: VisibilityFilters;
    readonly todos: ITodoState[];
}

export interface ITodoState {
    readonly id: number;
    readonly text: string;
    readonly completed: boolean;
}
