import React, { Component } from 'react'
import { Container, Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap'
import InvoicePage from './invoice_page'
import {generatePdfInvoice} from './pdf_generator'

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
                            <NavLink onClick={() => {
                                generatePdfInvoice(document.getElementById('printable'))
                            }}>print</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
                <div id='printable'>
                    <InvoicePage />
                </div>
            </Container>
        )
    }
}

export default App