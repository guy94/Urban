import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './Home.jsx'
import Map from './Map.jsx'
import FutureTravels from './FutureTravels.jsx'


class NavBar extends Component {
    
    switcher = () => {
        return(
        <Switch>
            <Route path="/home">
                <Home />
            </Route>
            <Route path="/map">
                <Map />
            </Route>
            <Route path="/futureTravels">
                <FutureTravels />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
        )
    }

    render() { 
        return ( <>
                    <Router>
                        <Navbar bg="dark" variant="dark">
                            <Container>
                                <Navbar.Brand href="#home">travelX</Navbar.Brand>
                                <Nav className="me-auto">
                                    <Nav.Link as={Link} to={'/home'} >Home</Nav.Link>
                                    <Nav.Link as={Link} to={'/map'}>Map</Nav.Link>
                                    <Nav.Link as={Link} to={'/futureTravels'}>Future Travels</Nav.Link>
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