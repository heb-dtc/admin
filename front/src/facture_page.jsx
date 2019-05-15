import React, { Component } from 'react'
import Input from './input.jsx'
import Recipient from './recipient.jsx'
import Sender from './sender.jsx'
import Heading from './heading.jsx'

class FacturePage extends Component {
    constructor() {
        super()

        this.state = {
            title: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value})
    }

    render() {
        const {title} = this.state

        return (
            <div>
                <Sender name={'Eugenia Morpurgo'} phone={'098765423'} email={'eumorpurgo@gmail.com'}
                        street={'2654/A Ponte dei scudi'}
                        zipCode={'30122'} city={'Venezia'}/> <br/><br/>

                <Recipient name={'Florent NOEL'} phone={'098765423'} email={'florent.noelfl@gmail.com'}
                           street={'2654/A Ponte dei scudi'}
                           zipCode={'30122'} city={'Venezia'}/><br/><br/>

                <Heading number={1} date={"11-08-1988"} />

                <form id="facture-form">
                    <Input
                        text="Title"
                        label="Title"
                        type="text"
                        id="title"
                        value={title}
                        handleChange={this.handleChange}
                    />

                    <Input
                        text="Title"
                        label="Title"
                        type="text"
                        id="title"
                        value={title}
                        handleChange={this.handleChange}
                    />
                </form>
            </div>
        )
    }
}

export default FacturePage