import { combineReducers } from 'redux';
import beerList from './beerlist/beerList';
import games from "./game/games";
import enthusiasm from './hello/enthusiasm';
import todos from './todo/todos';
import visibilityFilter from './todo/visibilityFilter';
import users from "./user/users";

export default combineReducers({
    beerList,
    games,
    users,
    enthusiasm,
    todos,
    visibilityFilter
});
