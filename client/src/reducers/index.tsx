import { combineReducers } from 'redux';
import enthusiasm from './hello/enthusiasm';
import todos from './todo/todos';
import visibilityFilter from './todo/visibilityFilter';
import users from "./user/users";

export default combineReducers({
    users,
    enthusiasm,
    todos,
    visibilityFilter
});
