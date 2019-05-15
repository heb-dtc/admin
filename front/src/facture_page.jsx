import React, { Component } from 'react'
import Input from './input.jsx'

class FacturePage extends Component {
    constructor() {
        super()

        this.state = {
            title: ""
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    render() {
        const { title } = this.state;

        return (
            <form id="article-form">
                <Input
                    text="Title"
                    label="Title"
                    type="text"
                    id="title"
                    value={title}
                    handleChange={this.handleChange}
                />
            </form>
        )
    }
}

export default FacturePage