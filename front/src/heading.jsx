import React from 'react'

const Heading = ({number, date}) => (
    <div className='text-black-50'>
        Facture number #{number} - {date}
    </div>
)

export default Heading