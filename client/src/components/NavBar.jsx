import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Map from './Map.jsx'


class NavBar extends Component {
    
    switcher = () => {
        return(
        <Switch>
            <Route path="/map">
                <Map />
            </Route>
            <Route path="/">
                <Map />
            </Route>
        </Switch>
        )
    }

    render() { 
        return ( <>
                    <Router>
                        <Navbar bg="dark" variant="dark">
                            <Container>
                                <Navbar.Brand >Urbanico</Navbar.Brand>
                                <Nav className="me-auto">
                                    <Nav.Link as={Link} to={'/map'}>Map</Nav.Link>
                                </Nav>
                            </Container>
                        </Navbar>
                        <div>
                            {this.switcher()}
                        </div>
                    </Router>
                </> );
    }
}
 
export default NavBar;