import { Action } from "redux";
import { ActionTypes } from "../constants/BeerList";

interface IAddItemAction extends Action {
    type: ActionTypes.ADD_ITEM;
    payload: {
        beer: string;
    }
}

interface IChangeItemAction extends Action {
    type: ActionTypes.CHANGE_ITEM;
    payload: {
        name: string;
    }
}

export const addItem: any = (name: string): IAddItemAction => {
    return {
        type: ActionTypes.ADD_ITEM,
        payload: {
            beer: name
        }
    }
};

export const changeItem: any = (name: string): IChangeItemAction => {
    return {
        type: ActionTypes.CHANGE_ITEM,
        payload: {
            name
        }
    }
};

export type BeerListActions = IAddItemAction | IChangeItemAction;
