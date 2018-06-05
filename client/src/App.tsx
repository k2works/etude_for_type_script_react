import * as React from 'react';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import './App.css';
import NavBar from "./components/pages/NavBar";
// import Nav from "./components/pages/Nav";
import app from './reducers';

const appStore = createStore(app);
const App = () => {
    return (
        <>
            <Provider store={appStore}>
                <NavBar />
            </Provider>
        </>
    )
};

export default App;
