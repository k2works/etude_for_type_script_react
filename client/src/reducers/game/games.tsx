import { GameActions } from "../../actions/game";
import { ActionTypes } from "../../constants/game";
import { IState } from "../../state/game";

const initialState = {
    history: [{
        squares: Array(9).fill(null),
    }],
    stepNumber: 0,
    xIsNext: true
};

const games = (state: IState = initialState, action: GameActions): any => {
    switch (action.type) {
        case ActionTypes.HANDLE_CLICK:
            return {
                ...state,
                history: action.payload.history,
                stepNumber: action.payload.stepNumber,
                xIsNext: !state.xIsNext
            };
        case ActionTypes.JUMP_TO:
            return {
                ...state,
                history: state.history,
                stepNumber: action.payload.stepNumber,
                xIsNext: (state.stepNumber % 2) === 0
            };
        default:
            return state;
    }
};

export default games;
