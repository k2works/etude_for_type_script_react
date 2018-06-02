import { EnthusiasmAction } from "../../actions";
import { DECREMENT_ENTHUSIASM, INCREMENT_ENTHUSIASM } from "../../constants";
import {IHelloState} from "../../state/hello";

const initialState = {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
};

export function enthusiasm(state: IHelloState = initialState, action: EnthusiasmAction): IHelloState {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            return {...state, enthusiasmLevel: state.enthusiasmLevel + 1};
        case DECREMENT_ENTHUSIASM:
            return {...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)};
        default:
            return state
    }
}

export default enthusiasm;
