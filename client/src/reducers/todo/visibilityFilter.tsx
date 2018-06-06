import { TodoActions } from '../../actions/todo';
import {ActionTypes, VisibilityFilters} from "../../constants/todo";

const visibilityFilter = (state: VisibilityFilters = VisibilityFilters.SHOW_ALL, action: TodoActions): VisibilityFilters => {
    switch (action.type) {
        case ActionTypes.SET_VISIBILITY_FILTER:
            return action.payload.filter;
        default:
            return state;
    }
};

export default visibilityFilter;
