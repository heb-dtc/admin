import React from 'react'
import contentEditable from './editable_component.jsx'

const Recipient = ({recipient}) => {
    const EditableName = contentEditable('div')
    const EditablePhone = contentEditable('div')
    const EditableEmail = contentEditable('div')
    const EditableStreet = contentEditable('div')
    const EditableCity = contentEditable('div')
    return (
        <div>
            <EditableName value={recipient.name}/>
            <EditablePhone value={recipient.phone}/>
            <EditableEmail value={recipient.email}/>
            <EditableStreet value={recipient.street}/>
            <EditableCity value={`${recipient.zipCode} ${recipient.city}`}/>
        </div>
    )
}

export default Recipient