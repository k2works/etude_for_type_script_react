import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { EnthusiasmAction } from "./actions";
import {BeerListContainer} from "./components/beerlist/BeerListContainer";
import { enthusiasm } from './reducers/index';
import { IStoreState } from './types/index';

import './index.css';

const store = createStore<IStoreState, EnthusiasmAction, any, any>(enthusiasm, {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
});

ReactDOM.render(
    <Provider store={store}>
        <BeerListContainer />
    </Provider>,
    document.getElementById('root') as HTMLElement
);
