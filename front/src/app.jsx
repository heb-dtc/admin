import React, { Component } from 'react'
import { Container, Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap'
import FacturePage from './facture_page'

class App extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <Container>
                <Navbar color="dark" className='text-white' expand="md">
                    <NavbarBrand>facture</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink>print facture</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
                <FacturePage />
            </Container>
        )
    }
}

export default App