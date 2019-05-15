import React, { Component } from 'react'
import { Button, Col, Container, Row, Table } from 'reactstrap'
import BankDetails from './bank_details.jsx'
import FactureId from './facture_id.jsx'
import Heading from './heading.jsx'
import Recipient from './recipient.jsx'
import Sender from './sender.jsx'

class FacturePage extends Component {
    constructor() {
        super()

        this.state = {
            transactions: [
                {
                    description: 'corso di design',
                    price: '990'
                },
                {
                    description: 'corso di design',
                    price: '1990'
                },
                {
                    description: 'corso di design',
                    price: '456'
                },
                {
                    description: 'corso di design',
                    price: '6740'
                }
            ]
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value})
    }

    render() {
        const {transactions} = this.state

        return (
            <Container>

                <Row>
                    <Col className='mt-4'>
                        <Sender class='' name={'Eugenia Morpurgo'} phone={'098765423'} email={'eumorpurgo@gmail.com'}
                                street={'2654/A Ponte dei scudi'}
                                zipCode={'30122'} city={'Venezia'}/>
                    </Col>
                </Row>

                <Row>
                    <Col className='text-right mt-4'>
                        <Recipient name={'Florent NOEL'} phone={'098765423'} email={'florent.noelfl@gmail.com'}
                                   street={'2654/A Ponte dei scudi'}
                                   zipCode={'30122'} city={'Venezia'}/>
                    </Col>
                </Row>

                <Row>
                    <Col className='mt-4 mb-4'>
                        <Heading number={1} date={'11-08-1988'}/>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Table bordered>
                            <thead>
                            <tr>
                                <th>Transactions</th>
                                <th className='text-right'>Price</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                transactions.map(transaction => {
                                    return (
                                        <tr>
                                            <td key={transaction.description}>{transaction.description}</td>
                                            <td className='text-right' key={transaction.price}>{transaction.price}</td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </Table>
                    </Col>
                </Row>

                <Row>
                    <Col className='mt-4'>
                        <FactureId id={'90987635243564758'}/>
                    </Col>
                </Row>

                <Row>
                    <Col className='mt-4'>
                        <BankDetails name={'Caisse dEpargne'} iban={'IOUMD2793984KD&UE'} phone={'098786352'} city={'Clamecy'}
                                     zipCode={'56210'}
                                     street={'rue du moulin a eau'}/>
                    </Col>
                </Row>

                <Button color="danger">Danger!</Button>

            </Container>
        )
    }
}

export default FacturePage