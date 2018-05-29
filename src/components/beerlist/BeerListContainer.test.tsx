import {shallow } from "enzyme";
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
});
