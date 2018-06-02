import * as React from 'react';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import './App.css';
import Nav from "./components/pages/nav";
import app from './reducers';

const appStore = createStore(app);
const App = () => {
    return (
        <>
            <Provider store={appStore}>
                <Nav/>
            </Provider>
        </>
    )
};

export default App;
