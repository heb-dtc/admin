import React from 'react'

const BankDetails = ({name, iban, phone, email, street, zipCode, city}) => (
    <div>
        <p>{name}</p>
        <p>{iban}</p>
        <p>{phone}</p>
        <p>{email}</p>
        <p>{street}</p>
        <p>{zipCode} {city}</p>
    </div>
)

export default BankDetails