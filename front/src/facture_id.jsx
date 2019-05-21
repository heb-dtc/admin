import React from 'react'
import contentEditable from './editable_component'

const FactureId = ({id}) => {
    const EditableId = contentEditable('span')
    return (
        <div>Facture ID <EditableId value={id}/></div>
    )
}

export default FactureId