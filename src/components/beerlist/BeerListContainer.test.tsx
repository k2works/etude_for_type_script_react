import {mount, shallow} from "enzyme";
import * as React from 'react';
import {BeerList} from "./BeerList";
import {BeerListContainer} from "./BeerListContainer";
import {InputArea} from "./InputArea";

describe('BeerListContainer', () => {
    it('should render InputArea and BeerList', () => {
        const wrapper = shallow(<BeerListContainer/>);
        expect(wrapper.containsAllMatchingElements([
            <InputArea key={1}/>,
            <BeerList key={1}/>
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

    xit('passes a bound addItem function to InputArea', () => {
        // const wrapper = shallow(<BeerListContainer/>);
        // const inputArea = wrapper.find(InputArea);
        // inputArea.prop('onSubmit')('Sam Adams');
        // expect(wrapper.state('beer')).toEqual(['Sam Adams']);
    });
});

describe('InputArea', () => {
    it('should contain an input and a button', () => {
        const wrapper = shallow(<InputArea/>);
        expect(wrapper.containsAllMatchingElements(
            [
                <input key={1}/>,
                <button key={1}>Add</button>
            ]
        )).toEqual(true);
    });

    it('should accept input', () => {
        const wrapper = mount(<InputArea/>);
        let input = wrapper.find('input');
        input.simulate('change', {target: { value: 'Resin' }});
        expect(wrapper.state('text')).toEqual('Resin');

        input = wrapper.find('input');
        expect(input.prop('value')).toEqual('Resin');
    })
});
