import React from 'react'

const Recipient = ({name, phone, email, street, zipCode, city}) => (
    <div>
        <p>{name}</p>
        <p>{phone}</p>
        <p>{email}</p>
        <p>{street}</p>
        <p>{zipCode} {city}</p>
    </div>
)

export default Recipient