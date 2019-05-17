import * as React from "react";
import Button from "reactstrap/es/Button";

class AddTransactionRow extends React.Component {
    constructor() {
        super()

        this.state = {
            description: '',
            price: 0
        }

        this.descriptionChanged = this.descriptionChanged.bind(this)
        this.priceChanged = this.priceChanged.bind(this)
        this.add = this.add.bind(this)
    }

    descriptionChanged(event) {
        this.setState({description: event.target.value})
    }

    priceChanged(event) {
        this.setState({price: event.target.value})
    }

    add() {
        const transaction = this.state
        this.props.addTransaction(transaction)
        this.setState({
            description: '',
            price: 0
        })
    }

    render() {
        const {description, price} = this.state
        const {add} = this.props
        return (
            <tr>
                <td>
                    <input type='text'
                           placeholder='transaction'
                           value={description}
                           onChange={(event) => this.descriptionChanged(event)}/>
                </td>
                <td className='text-right'>
                    <input className='text-right'
                           type='number'
                           value={price}
                           onChange={(event) => this.priceChanged(event)}/>
                </td>
                <td><Button onClick={() => this.add()}>add</Button></td>
            </tr>
        )
    }
}

export default AddTransactionRow