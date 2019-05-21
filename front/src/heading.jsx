import React from 'react'
import contentEditable from './editable_component'

const Heading = ({number, date}) => {
    const EditableNumber = contentEditable('span')
    const EditableDate = contentEditable('span')
    return (
        <div className='text-black-50'>
            Facture number #<EditableNumber value={number}/> - <EditableDate value={date}/>
        </div>
    )
}

export default Heading