import React, { Component } from 'react'
import { Container, Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap'
import FacturePage from './facture_page.jsx'
import { Mode } from './mode'

class App extends Component {
    constructor() {
        super()

        this.state = {
            mode: Mode.SEE
        }
    }

    render() {
        const {mode} = this.state
        return (
            <Container>
                <Navbar color="dark" className='text-white' expand="md">
                    <NavbarBrand>facture</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink>edit facture</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>see facture</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
                <FacturePage mode={mode}/>
            </Container>
        )
    }
}

export default App