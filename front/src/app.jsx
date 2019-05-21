import React, { Component } from 'react'
import { Container, Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap'
import InvoicePage from './invoice_page'

class App extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <Container>
                <Navbar color="dark" className='text-white' expand="md">
                    <NavbarBrand>invoice-maker</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink>print</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
                <InvoicePage />
            </Container>
        )
    }
}

export default App