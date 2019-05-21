import React from 'react'
import contentEditable from './editable_component'

const Sender = ({sender}) => {
    const EditableName = contentEditable('div')
    const EditablePhone = contentEditable('div')
    const EditableEmail = contentEditable('div')
    const EditableStreet = contentEditable('div')
    const EditableCity = contentEditable('div')
    return (
        <div>
            <EditableName value={sender.name}/>
            <EditablePhone value={sender.phone}/>
            <EditableEmail value={sender.email}/>
            <EditableStreet value={sender.street}/>
            <EditableCity value={`${sender.zipCode} ${sender.city}`}/>
        </div>
    )
}

export default Sender