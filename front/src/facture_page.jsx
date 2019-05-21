import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'
import BankDetails from './bank_details.jsx'
import FactureId from './facture_id.jsx'
import Heading from './heading.jsx'
import Recipient from './recipient.jsx'
import Sender from './sender.jsx'
import TransactionTable from './transactions_table.jsx'

class FacturePage extends Component {
    constructor() {
        super()

        this.state = {
            transactions: [
            ],
            sender: {
                name: 'Eugenia Morpurgo',
                phone: '098765423',
                email: 'eumorpurgo@gmail.com',
                street: '2654/A Ponte dei scudi',
                zipCode: '30122' ,
                city: 'Venezia'
            },
            recipient: {
                name: 'Florent NOEL',
                phone: '098765423',
                email: 'florent.noelfl@gmail.com',
                street: '2654/A Ponte dei scudi',
                zipCode: '30122' ,
                city: 'Venezia'
            }
        }

        this.addTransaction = this.addTransaction.bind(this)
        this.removeTransaction = this.removeTransaction.bind(this)
    }

    addTransaction(transaction) {
        const id = this.state.transactions.length
        this.setState(prevState => ({
                transactions: [...prevState.transactions, {
                    id: id,
                    description: transaction.description,
                    price: transaction.price
                }]
            })
        )
    }

    removeTransaction(transactionId) {
        let filteredArray = this.state.transactions.filter(transaction => transaction.id !== transactionId)
        this.setState({transactions: filteredArray});
    }

    render() {
        const {transactions, sender, recipient} = this.state

        return (
            <Container>
                <Row>
                    <Col className='mt-4'>
                        <Sender sender={sender}/>
                    </Col>
                </Row>

                <Row>
                    <Col className='text-right mt-4'>
                        <Recipient recipient={recipient}/>
                    </Col>
                </Row>

                <Row>
                    <Col className='mt-4 mb-2'>
                        <Heading number={1} date={'11-08-1988'}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TransactionTable transactions={transactions}
                                          addTransaction={(transaction) => this.addTransaction(transaction)}
                                          removeTransaction={(transactionId) => this.removeTransaction(transactionId)}/>
                    </Col>
                </Row>

                <Row>
                    <Col className='mt-4'>
                        <FactureId id={'90987635243564758'}/>
                    </Col>
                </Row>

                <Row className='mb-5'>
                    <Col className='mt-4'>
                        <BankDetails name={'Caisse dEpargne'} iban={'IOUMD2793984KD&UE'} phone={'098786352'} city={'Clamecy'}
                                     zipCode={'56210'}
                                     street={'rue du moulin a eau'}/>
                    </Col>
                </Row>

            </Container>
        )
    }
}

export default FacturePage