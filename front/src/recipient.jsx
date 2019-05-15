import React from 'react'

const Recipient = ({recipient}) => (
    <div>
        <p>{recipient.name}</p>
        <p>{recipient.phone}</p>
        <p>{recipient.email}</p>
        <p>{recipient.street}</p>
        <p>{recipient.zipCode} {recipient.city}</p>
    </div>
)

export default Recipient