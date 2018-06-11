import * as enzyme from 'enzyme';
import * as React from 'react';
import * as renderer from "react-test-renderer";
import {IHelloState} from "../../state/hello";
import Hello from './Hello';

it('renders the correct text with an explicit enthusiasm of 1', () => {
    const initialState: IHelloState = {languageName:'Daniel',enthusiasmLevel:1};
    const hello = enzyme.shallow(<Hello enthusiasm={initialState} /> );
    expect(hello.find(".greeting").text()).toEqual('Hello Daniel!');
});

it('renders the correct text with an explicit enthusiasm level of 5', () => {
    const initialState: IHelloState = {languageName:'Daniel',enthusiasmLevel:5};
    const hello = enzyme.shallow(<Hello enthusiasm={initialState} /> );
    expect(hello.find(".greeting").text()).toEqual('Hello Daniel!!!!!');
});

it('throw when then enthusiasm level is 0', () => {
    const initialState: IHelloState = {languageName:'Daniel',enthusiasmLevel:0};
    expect(() => {
        enzyme.shallow(<Hello enthusiasm={initialState} /> );
    }).toThrow();
});

it('throws when the enthusiasm level is negative,', () => {
    const initialState: IHelloState = {languageName:'Daniel',enthusiasmLevel:-1};
    expect(() => {
        enzyme.shallow(<Hello enthusiasm={initialState} />);
    }).toThrow();
});

it('renders correctly', () => {
    const initialState: IHelloState = {languageName:'Daniel',enthusiasmLevel:10};
    const tree = renderer
        .create(<Hello enthusiasm={initialState} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
