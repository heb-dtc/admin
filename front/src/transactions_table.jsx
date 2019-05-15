import React from 'react'
import { Table } from 'reactstrap'
import { getTotal, getTotalTaxes, getTotalToPay } from './transactions_calculator.js'

const TransactionTable = ({transactions}) => (
    <Table bordered>
        <thead>
        <tr>
            <th>Transactions</th>
            <th className='text-right'>Price</th>
        </tr>
        </thead>
        <tbody>
        {
            transactions.map(transaction => {
                return (
                    <tr>
                        <td key={transaction.description}>{transaction.description}</td>
                        <td className='text-right' key={transaction.price}>{transaction.price}</td>
                    </tr>
                )
            })
        }
        <tr>
            <td>Total</td>
            <td className='text-right'>{getTotal(transactions)}</td>
        </tr>
        <tr>
            <td>Total Taxes</td>
            <td className='text-right'>{getTotalTaxes(transactions)}</td>
        </tr>
        <tr>
            <td>To pay</td>
            <td className='text-right'>{getTotalToPay(transactions)}</td>
        </tr>
        </tbody>
    </Table>
)

export default TransactionTable