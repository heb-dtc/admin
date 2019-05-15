import React, { Component } from 'react'
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
            <div>
                <Sender name={'Eugenia Morpurgo'} phone={'098765423'} email={'eumorpurgo@gmail.com'}
                        street={'2654/A Ponte dei scudi'}
                        zipCode={'30122'} city={'Venezia'}/>

                <br/><br/>

                <Recipient name={'Florent NOEL'} phone={'098765423'} email={'florent.noelfl@gmail.com'}
                           street={'2654/A Ponte dei scudi'}
                           zipCode={'30122'} city={'Venezia'}/>

                <br/><br/>

                <Heading number={1} date={'11-08-1988'}/>

                <table>
                    <tbody>
                    {
                        transactions.map(transaction => {
                            return (
                                <tr>
                                    <td key={transaction.description}>{transaction.description}</td>
                                    <td key={transaction.price}>{transaction.price}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>

                <br/><br/>

                <FactureId id={'90987635243564758'}/>
                <BankDetails name={'Caisse dEpargne'} iban={'IOUMD2793984KD&UE'} phone={'098786352'} city={'Clamecy'} zipCode={'56210'}
                             street={'rue du moulin a eau'}/>
            </div>
        )
    }
}

export default FacturePage