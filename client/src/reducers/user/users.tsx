import { UserActions } from "../../actions/user";
import { ActionTypes } from "../../constants/user";
import { IState } from "../../state/user";

const users = (state: IState[] = [], action: UserActions): any => {
    const initialState: IState[] = [];
    switch (action.type) {
        case ActionTypes.CLEAR_STATE:
            return initialState;
        case ActionTypes.ON_LOAD:
            return [
                ...state,
                ...action.payload
            ];
        default:
            return state;
    }
};

export default users;
