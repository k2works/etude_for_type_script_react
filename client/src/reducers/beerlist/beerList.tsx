import { BeerListActions } from "../../actions/beerList";
import { ActionTypes } from "../../constants/BeerList";
import { IState } from "../../state/beerList";

const initialState = {
    beers: [],
    text: ''
};

const beerList = (state: IState = initialState, action: BeerListActions): any => {
    switch (action.type) {
        case ActionTypes.ADD_ITEM:
            return {
                ...state,
                beers: state.beers.concat(action.payload.beer),
                text: action.payload.beer
            };
        case ActionTypes.CHANGE_ITEM:
            return {
                ...state,
                beers: state.beers,
                text: state.text = action.payload.name
            };
        default:
            return state;
    }
};

export default beerList;
