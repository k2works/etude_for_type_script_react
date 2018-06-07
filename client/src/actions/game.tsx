import { Action, ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { ActionTypes } from "../constants/game";
import { IState } from "../state/game";

interface IHandleClickAction extends Action {
    type: ActionTypes.HANDLE_CLICK;
    payload: IState
}

interface IJumpToAction extends Action {
    type: ActionTypes.JUMP_TO;
    payload: IState
}

export const handleClick: any = (history:any, squares: any): IHandleClickAction => {
    return {
        type: ActionTypes.HANDLE_CLICK,
        payload: {
            history: history.concat([{
                squares,
            }]),
            stepNumber: history.length,
            xIsNext: true
        }
    }
};

export const jumpTo: any = (move: number): IJumpToAction => {
    return {
        type: ActionTypes.JUMP_TO,
        payload: {
            history: [],
            stepNumber: move,
            xIsNext: true
        }
    }
};

export const asyncFetchUsers: ActionCreator<ThunkAction<Promise<Action>, any, void, any>> = (url: string) => {
    return async (dispatch: Dispatch<any>): Promise<Action> => {
        try {
            return dispatch({
                type: ActionTypes.HANDLE_CLICK,
                payload: await apiCall(url)
            })
        } catch (e) {
            throw Error(e);
        }
    };
};

const apiCall: any = async (url: string) => {
    const res = await fetch(url, {method: 'GET'});

    let json = [];
    if (res.status === 200) {
        json = await res.json();
    } else {
        throw new Error(`illegal status code: ${res.status}`);
    }
    return json;
};

export type GameActions = IHandleClickAction | IJumpToAction;
