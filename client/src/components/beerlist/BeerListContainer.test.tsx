import {mount, shallow} from "enzyme";
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { IState } from "../../state/beerList";
import {BeerList} from "./BeerList";
import {BeerListContainer} from "./BeerListContainer";
import {InputArea} from "./InputArea";

describe('BeerListContainer', () => {
    xit('should render InputArea and BeerList', () => {
        const beerList: IState = {beers:[''],text:''};
        const addItemSpy = jest.fn();
        const changeItemSpy = jest.fn();
        const wrapper = shallow(<BeerListContainer addItem={addItemSpy} changeItem={changeItemSpy}  beerList={beerList}/>);
        expect(wrapper.containsAllMatchingElements([
            <InputArea key={0} onSubmit={addItemSpy} onChange={changeItemSpy} text={'test'}/>,
            <BeerList  key={1} items={[]}/>
        ])).toEqual(true);
    });

    xit('should start with an empty list', () => {
        const beerList: IState = {beers:[''],text:''};
        const addItemSpy = jest.fn();
        const changeItemSpy = jest.fn();
        const wrapper = shallow(<BeerListContainer addItem={addItemSpy} changeItem={changeItemSpy}  beerList={beerList} />);
        expect(wrapper.prop('beerList')).toEqual([]);
    });

    xit('adds items to the list', () => {
        const beerList: IState = {beers:[''],text:''};
        const addItemSpy = jest.fn();
        const changeItemSpy = jest.fn();
        const wrapper = shallow(<BeerListContainer addItem={addItemSpy} changeItem={changeItemSpy}  beerList={beerList} />);
        const instance = wrapper.instance();

        instance.props.addItem('Sam Adams');
        expect(wrapper.prop('beers')).toEqual(['Sam Adams']);
    });

    xit('passes addItem to InputArea', () => {
        const beerList: IState = {beers:[''],text:''};
        const addItemSpy = jest.fn();
        const changeItemSpy = jest.fn();
        const wrapper = shallow(<BeerListContainer addItem={addItemSpy} changeItem={changeItemSpy}  beerList={beerList} />);
        const inputArea = wrapper.find(InputArea);
        const instance = wrapper.instance();
        const addItem = instance.props.addItem;
        expect(inputArea.prop('onSubmit')).toEqual(addItem);
    });

    xit('passes a bound addItem function to InputArea', () => {
        const beerList: IState = {beers:[''],text:''};
        const addItemSpy = jest.fn();
        const changeItemSpy = jest.fn();
        const wrapper = shallow(<BeerListContainer addItem={addItemSpy} changeItem={changeItemSpy}  beerList={beerList} />);
        const inputArea = wrapper.find(InputArea);
        inputArea.prop('onSubmit')('Sam Adams');
        expect(wrapper.prop('beers')).toEqual(['Sam Adams']);
    });

    xit('renders the items', () => {
        const beerList: IState = {beers:[''],text:''};
        const addItemSpy = jest.fn();
        const changeItemSpy = jest.fn();
        const wrapper = shallow(<BeerListContainer addItem={addItemSpy} changeItem={changeItemSpy}  beerList={beerList} />);
        const addButton = wrapper.find('button');
        const input = wrapper.find('input');

        input.simulate('change', {target: { value: 'Sam Adams' }});
        addButton.simulate('click');
        input.simulate('change', {target: { value: 'Resin' }});
        addButton.simulate('click');
        expect(wrapper.find('li').length).toEqual(2);
    });

    xit('renders correctly', () => {
        const beerList: IState = {beers:[''],text:''};
        const addItemSpy = jest.fn();
        const changeItemSpy = jest.fn();
        const tree = renderer
            .create(<BeerListContainer addItem={addItemSpy} changeItem={changeItemSpy}  beerList={beerList} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('InputArea', () => {
    it('should contain an input and a button', () => {
        const addItemSpy = jest.fn();
        const changeItemSpy = jest.fn();
        const wrapper = shallow(<InputArea onSubmit={addItemSpy} onChange={changeItemSpy} text={'test'}/>);
        expect(wrapper.containsAllMatchingElements(
            [
                <input key={1} />,
                <button key={1}>Add</button>
            ]
        )).toEqual(true);
    });

    it('should accept input', () => {
        const addItemSpy = jest.fn();
        const changeItemSpy = jest.fn();
        const wrapper = mount(<InputArea onSubmit={addItemSpy} onChange={changeItemSpy} text={'Resin'}/>);
        let input = wrapper.find('input');
        input.simulate('change', {target: { value: 'Resin' }});
        expect(wrapper.prop('text')).toEqual('Resin');

        input = wrapper.find('input');
        expect(input.prop('value')).toEqual('Resin');
    });

    it('should call onSubmit when Add is clicked', () => {
        const addItemSpy = jest.fn();
        const changeItemSpy = jest.fn();
        const wrapper = shallow(<InputArea onSubmit={addItemSpy} onChange={changeItemSpy} text={'test'}/>);
        wrapper.setProps({text:'Octoberfest'});
        const addButton = wrapper.find('button');

        addButton.simulate('click');

        expect(addItemSpy).toBeCalled();
        expect(addItemSpy).toBeCalledWith('Octoberfest');
    });

    it('renders correctly', () => {
        const addItemSpy = jest.fn();
        const changeItemSpy = jest.fn();
        const tree = renderer
            .create(<InputArea  onSubmit={addItemSpy} onChange={changeItemSpy} text={''}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
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

    it('renders correctly', () => {
        const tree = renderer
            .create(<BeerList  items={[]}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
