export interface IState {
    history:IHistoryData[];
    stepNumber:number;
    xIsNext:boolean;
}

export interface IHistoryData {
    squares: Array<('O' | 'X' | null)>;
}

