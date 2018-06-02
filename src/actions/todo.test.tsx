import {VisibilityFilters} from "../constants/todo";
import * as actions from './todo'

describe('todo actions', () => {
    it('addTodo should create ADD_TODO action', () => {
        expect(actions.addTodo('Use Redux')).toEqual({
            type: "ADD_TODO",
            payload: {
                id: 1,
                text: "Use Redux"
            }
        })
    });

    it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
        expect(actions.setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE)).toEqual({
            type: "SET_VISIBILITY_FILTER",
            payload: {
                filter: "SHOW_ACTIVE"
            }
        })
    });

    it('toggleTodo should create TOGGLE_TODO action', () => {
        expect(actions.toggleTodo(1)).toEqual({
            type: "TOGGLE_TODO",
            payload: {
                id: 1
            }
        })
    })
});
