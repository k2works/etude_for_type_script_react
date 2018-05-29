import {mount, shallow} from "enzyme";
import * as React from 'react';
import {BeerList} from "./BeerList";
import {BeerListContainer} from "./BeerListContainer";
import {InputArea} from "./InputArea";

describe('BeerListContainer', () => {
    xit('should render InputArea and BeerList', () => {
        const addItemSpy = jest.fn();
        const wrapper = shallow(<BeerListContainer/>);
        expect(wrapper.containsAllMatchingElements([
            <InputArea key={0} onSubmit={addItemSpy}/>,
            <BeerList  key={1} items={[]}/>
        ])).toEqual(true);
    });

    it('should start with an empty list', () => {
        const wrapper = shallow(<BeerListContainer/>);
        expect(wrapper.state('beers')).toEqual([]);
    });

    it('adds items to the list', () => {
        const wrapper = shallow(<BeerListContainer/>);
        const instance = wrapper.instance() as BeerListContainer;

        instance.addItem('Sam Adams');
        expect(wrapper.state('beers')).toEqual(['Sam Adams']);
    });

    it('passes addItem to InputArea', () => {
        const wrapper = shallow(<BeerListContainer/>);
        const inputArea = wrapper.find(InputArea);
        const instance = wrapper.instance() as BeerListContainer;
        const addItem = instance.addItem;
        expect(inputArea.prop('onSubmit')).toEqual(addItem);
    });

    it('passes a bound addItem function to InputArea', () => {
        const wrapper = shallow(<BeerListContainer/>);
        const inputArea = wrapper.find(InputArea);
        inputArea.prop('onSubmit')('Sam Adams');
        expect(wrapper.state('beers')).toEqual(['Sam Adams']);
    });

    it('renders the items', () => {
        const wrapper = mount(<BeerListContainer/>);
        const addButton = wrapper.find('button');
        const input = wrapper.find('input');

        input.simulate('change', {target: { value: 'Sam Adams' }});
        addButton.simulate('click');
        input.simulate('change', {target: { value: 'Resin' }});
        addButton.simulate('click');
        expect(wrapper.find('li').length).toEqual(2);
    })
});

describe('InputArea', () => {
    it('should contain an input and a button', () => {
        const addItemSpy = jest.fn();
        const wrapper = shallow(<InputArea onSubmit={addItemSpy}/>);
        expect(wrapper.containsAllMatchingElements(
            [
                <input key={1} />,
                <button key={1}>Add</button>
            ]
        )).toEqual(true);
    });

    it('should accept input', () => {
        const addItemSpy = jest.fn();
        const wrapper = mount(<InputArea onSubmit={addItemSpy}/>);
        let input = wrapper.find('input');
        input.simulate('change', {target: { value: 'Resin' }});
        expect(wrapper.state('text')).toEqual('Resin');

        input = wrapper.find('input');
        expect(input.prop('value')).toEqual('Resin');
    });

    it('should call onSubmit when Add is clicked', () => {
        const addItemSpy = jest.fn();
        const wrapper = shallow(<InputArea onSubmit={addItemSpy}/>);
        wrapper.setState({text:'Octoberfest'});
        const addButton = wrapper.find('button');

        addButton.simulate('click');

        expect(addItemSpy).toBeCalled();
        expect(addItemSpy).toBeCalledWith('Octoberfest');
    });
});

describe('BeerList', () => {
    it('should render zero items', () => {
        const wrapper = shallow(<BeerList items={[]}/>);
        expect(wrapper.find('li')).toHaveLength(0)
    });

    it('should render some items', () => {
        const items = ['Sam Adams', 'Resin', 'Octoberfest'];
        const wrapper = shallow(<BeerList items={items}/>);
        expect(wrapper.find('li')).toHaveLength(3)
    });
});
