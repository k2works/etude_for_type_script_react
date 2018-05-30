import {mount, shallow} from "enzyme";
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Board from "./Board";
import Game from "./Game";

describe('Game', () => {
    xit('should render Board', () => {
        const onClickSpy = jest.fn();
        const wrapper = shallow(<Game />);

        expect(wrapper.containsAllMatchingElements([
            <Board key={0} squares={[]} onClick={onClickSpy} />,
        ])).toEqual(true);
    });

    it('should start with an initialized squares', () => {
        const wrapper = shallow(<Game/>);

        expect(wrapper.state('history')).toEqual([
            {"squares": [null, null, null, null, null, null, null, null, null]}
        ])
    });

    it('put X to the square', () => {
        const wrapper = mount(<Game/>);
        let square = wrapper.find('button').first();

        square.simulate('click');
        square = wrapper.find('button').first();
        expect(square.text()).toBe('X');
    });

    it('passes a bound handleClick function to Board', () => {
        const wrapper = shallow(<Game/>);
        const board = wrapper.find(Board);

        board.prop('onClick')(0);
        board.prop('onClick')(8);
        expect(wrapper.state('history')).toEqual([
            {"squares": [null, null, null, null, null, null, null, null, null]},
            {"squares": ["X", null, null, null, null, null, null, null, null]},
            {"squares": ["X", null, null, null, null, null, null, null, "O"]}
            ]);
    });

    it('renders the Winner:X', () => {
        const wrapper = mount(<Game/>);
        const board = wrapper.find(Board);

        board.prop('onClick')(0);
        board.prop('onClick')(8);
        board.prop('onClick')(1);
        board.prop('onClick')(7);
        board.prop('onClick')(2);

        expect(wrapper.text()).toEqual('XXXOOWinner: XGot to game startGo to move #1Go to move #2Go to move #3Go to move #4Go to move #5');
    });

    it('renders correctly', () => {
        const tree = renderer
            .create(<Game />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
