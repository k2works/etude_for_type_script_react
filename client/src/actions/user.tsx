import { Action, ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { ActionTypes } from "../constants/user";
import { IUser } from "../state/user";

interface IClearUserAction extends Action {
    type: ActionTypes.CLEAR_STATE;
    payload: IUser[]
}

interface IFetchUsersAction extends Action {
    type: ActionTypes.ON_LOAD;
    payload: IUser[]
}

export const clearUsers: ActionCreator<Action> = () => {
    return {
        type: ActionTypes.CLEAR_STATE,
        payload: []
    }
};

export const fetchUsers: ActionCreator<ThunkAction<Action,any, void, any>> = (url: string) => {
    return (dispatch: Dispatch<any>): Action => {
        const payload = [{id:1, email:'hoge@hoge.com', password:'hogehoge'},{id:2, email:'pyo@pyo.com', password:'pyhop'}];
        return dispatch({
            type: ActionTypes.ON_LOAD,
            payload
        });
    };
};

export const asyncFetchUsers: ActionCreator<ThunkAction<Promise<Action>, any, void, any>> = (url: string) => {
    return async (dispatch: Dispatch<any>): Promise<Action> => {
        try {
            return dispatch({
                type: ActionTypes.ON_LOAD,
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

export type UserActions = IClearUserAction | IFetchUsersAction;
