import * as React from 'react';
import './App.css';
import {BeerListContainer} from "./components/beerlist/BeerListContainer";
import Game from "./components/game/Game";
import Hello from "./containers/Hello";

const App = () => {
    return (
        <>
            <Hello/>
            <Game/>
            <BeerListContainer/>
        </>
    )
};

export default App;
