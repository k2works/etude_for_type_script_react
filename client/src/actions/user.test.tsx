import * as fetchMock from 'fetch-mock'
import * as actions from './user'

describe('user actions', () => {
    afterEach(fetchMock.restore);

    it('clearUser should create CLEAR_STATE action', () => {
        expect(actions.clearUsers()).toEqual({
            type: "CLEAR_STATE",
            payload: []
        })
    });
});



