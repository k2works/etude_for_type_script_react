import * as React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route
} from 'react-router-dom'
import {BeerListContainer} from "../beerlist/BeerListContainer";
import Game from "../game/Game";
import HelloApp from "../hello/App";
import TodoApp from "../todo/App";
import About from "./About";
import Home from "./Home";
import Topics from "./Topics";

const Nav: React.SFC = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/topics">Topics</Link></li>
                    <li><Link to="/hello">Hello</Link></li>
                    <li><Link to="/game">Game</Link></li>
                    <li><Link to="/beer-list">BeerList</Link></li>
                    <li><Link to="/todo-list">ToDoList</Link></li>
                </ul>

                <hr/>

                <Route exact={true} path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/topics" component={Topics}/>
                <Route path="/hello" component={HelloApp}/>
                <Route path="/game" component={Game}/>
                <Route path="/beer-list" component={BeerListContainer}/>
                <Route path="/todo-list" component={TodoApp}/>
            </div>
        </Router>
    );
};

export default Nav
