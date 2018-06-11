import * as actions from './user'

describe('user actions', () => {
    it('clearUser should create CLEAR_STATE action', () => {
        expect(actions.clearUsers()).toEqual({
            type: "CLEAR_STATE",
            payload: []
        })
    });
});



