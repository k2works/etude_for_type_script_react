export interface ITodo {
    text: string;
    completed: boolean;
}

export type todos = [ITodo]

export interface ITodoStoreState {
    visibilityFilter: string;
    todos: todos;
}
