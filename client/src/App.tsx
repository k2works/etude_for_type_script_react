import * as React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'
import './App.css';
import NavBar from "./components/pages/NavBar";
import app from './reducers';

const appStore = createStore(app, applyMiddleware(thunk));
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
