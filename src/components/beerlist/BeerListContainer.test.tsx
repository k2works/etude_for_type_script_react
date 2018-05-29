import {shallow } from "enzyme";
import * as React from 'react';
import {BeerListContainer} from "./BeerListContainer";
import {InputArea} from "./InputArea";
import {BeerList} from "./BeerList";

describe('BeerListContainer', () => {
    it('should render InputArea and BeerList', () => {
        const wrapper = shallow(<BeerListContainer/>);
        expect(wrapper.containsAllMatchingElements([
            <InputArea />,
            <BeerList />
        ])).toEqual(true);
    });
});
