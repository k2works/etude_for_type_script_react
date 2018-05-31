import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { EnthusiasmAction } from "./actions";
import './App.css';
import {BeerListContainer} from "./components/beerlist/BeerListContainer";
import Game from "./components/game/Game";
import Hello from "./containers/Hello";
import { enthusiasm } from './reducers';
import todoApp from './reducers/todo';
import { IStoreState } from './types';

const todoStore = createStore(todoApp);
const helloStore = createStore<IStoreState, EnthusiasmAction, any, any>(enthusiasm, {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
});

const App = () => {
    return (
        <>
            <Provider store={helloStore}>
              <Hello/>
            </Provider>,
            <Game/>
            <BeerListContainer/>
        </>
    )
};

export default App;
