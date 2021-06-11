import React, { Component } from 'react';
import {Navbar,Nav} from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Header extends Component {
    render() {
        return (
            <>
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="#home">Recipes</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/favorite">MyFavorite</Nav.Link>
              </Nav>
             
            </Navbar>
            <br />
            
          </>
        )
    }
}

export default Header
