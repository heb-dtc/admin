import React from 'react'

const Sender = ({sender}) => (
    <div>
        <p>{sender.name}</p>
        <p>{sender.phone}</p>
        <p>{sender.email}</p>
        <p>{sender.street}</p>
        <p>{sender.zipCode} {sender.city}</p>
    </div>
)

export default Sender