import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Board from "./Board";
import Square from "./Square";

describe('Board', () => {
    const onClickSpy = jest.fn();
    it('renders correctly', () => {
        const tree = renderer
            .create(<Board squares={[]} onClick={onClickSpy} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('Square', () => {
    const onClickSpy = jest.fn();

    it('renders correctly', () => {
        const tree = renderer
            .create(<Square value={'O'} onClick={onClickSpy}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
