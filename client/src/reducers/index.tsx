import { combineReducers } from 'redux';
import games from "./game/games";
import enthusiasm from './hello/enthusiasm';
import todos from './todo/todos';
import visibilityFilter from './todo/visibilityFilter';
import users from "./user/users";

export default combineReducers({
    games,
    users,
    enthusiasm,
    todos,
    visibilityFilter
});
