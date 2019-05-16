import React from 'react'
import contentEditable from './editable_component.jsx'

class BankDetails extends React.Component {

    render() {
        const {name, iban, phone, email, street, zipCode, city} = this.props
        const EditableName = contentEditable('div')
        const EditablePhone = contentEditable('div')
        const EditableEmail = contentEditable('div')
        const EditableStreet = contentEditable('div')
        const EditableCity = contentEditable('div')
        return (
            <div>
                <EditableName value={name}/>
                <EditableName value={iban}/>
                <EditablePhone value={phone}/>
                <EditableEmail value={email}/>
                <EditableStreet value={street}/>
                <EditableCity value={`${zipCode} ${city}`}/>
            </div>
        )
    }
}

export default BankDetails