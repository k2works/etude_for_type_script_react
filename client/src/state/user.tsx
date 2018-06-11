export interface IState {
    readonly users: IUser[];
}

export interface IUser {
    id: number;
    email: string;
    password: string;
}
