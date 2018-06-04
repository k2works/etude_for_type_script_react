import * as React from 'react'
import {Navbar} from "react-bootstrap";
import * as MenuItem from "react-bootstrap/lib/MenuItem";
import * as Nav from "react-bootstrap/lib/Nav";
import * as NavDropdown from "react-bootstrap/lib/NavDropdown";
import * as NavItem from "react-bootstrap/lib/NavItem";
import LinkContainer from "react-router-bootstrap/lib/LinkContainer";
import {
    BrowserRouter as Router, Link, Route
} from 'react-router-dom'
import {BeerListContainer} from "../beerlist/BeerListContainer";
import Game from "../game/Game";
import HelloApp from "../hello/App";
import TodoApp from "../todo/App";
import About from "./About";
import AppForm from "./Form";
import Home from "./Home";
import AppModal from "./Modal";
import Topics from "./Topics";

const NavBar: React.SFC = () => {
    return (
        <Router>
            <div className="App container">
                <Navbar fluid={true} collapseOnSelect={true} inverse={true}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">EtudeForTypeScriptReact</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight={true}>
                            <LinkContainer to="/topics">
                                <NavItem>Topics</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/form">
                                <NavItem>Form</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/modal">
                                <NavItem>Modal</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/about">
                                <NavItem>About</NavItem>
                            </LinkContainer>

                            <NavDropdown eventKey={4} title="Application" id="basic-nav-dropdown">
                                <LinkContainer to="/hello">
                                    <MenuItem eventKey={4.1}>Hello</MenuItem>
                                </LinkContainer>
                                <LinkContainer to="/game">
                                    <MenuItem eventKey={4.2}>Game</MenuItem>
                                </LinkContainer>
                                <LinkContainer to="/beer-list">
                                    <MenuItem eventKey={4.3}>BeerList</MenuItem>
                                </LinkContainer>
                                <LinkContainer to="/todo-list">
                                    <MenuItem eventKey={4.4}>TodoList</MenuItem>
                                </LinkContainer>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Route exact={true} path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/topics" component={Topics}/>
                <Route path="/form" component={AppForm}/>
                <Route path="/modal" component={AppModal}/>
                <Route path="/hello" component={HelloApp}/>
                <Route path="/game" component={Game}/>
                <Route path="/beer-list" component={BeerListContainer}/>
                <Route path="/todo-list" component={TodoApp}/>
            </div>
        </Router>
    );
};

export default NavBar
