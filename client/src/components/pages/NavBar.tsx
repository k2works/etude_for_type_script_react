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
import BeerListApp from "../beerlist/App";
import GameApp from "../game/App";
import HelloApp from "../hello/App";
import TodoApp from "../todo/App";
import UserApp from "../user/App";
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

                            <NavDropdown eventKey={5} title="Application" id="basic-nav-dropdown">
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
                                <LinkContainer to="/users">
                                    <MenuItem eventKey={5.5}>Users</MenuItem>
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
                <Route path="/game" component={GameApp}/>
                <Route path="/beer-list" component={BeerListApp}/>
                <Route path="/todo-list" component={TodoApp}/>
                <Route path="/users" component={UserApp}/>
            </div>
        </Router>
    );
};

export default NavBar
