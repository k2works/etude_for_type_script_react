import { combineReducers } from 'redux';
import enthusiasm from './hello/enthusiasm';
import todos from './todo/todos';
import visibilityFilter from './todo/visibilityFilter';

export default combineReducers({
    enthusiasm,
    todos,
    visibilityFilter
});
