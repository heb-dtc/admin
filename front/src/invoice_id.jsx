import React from 'react'
import contentEditable from './editable_component'

const InvoiceId = ({id}) => {
    const EditableId = contentEditable('span')
    return (
        <div>Invoice ID <EditableId value={id}/> </div>
    )
}

export default InvoiceId