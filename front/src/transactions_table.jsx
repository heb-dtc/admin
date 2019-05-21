import React from 'react'
import { Table } from 'reactstrap'
import { getTotal, getTotalTaxes, getTotalToPay } from './transactions_calculator.js'
import contentEditable from "./editable_component.jsx";
import Button from "reactstrap/es/Button";
import AddTransactionRow from "./transaction/add_transaction_row.jsx";

const TransactionTable = ({transactions, addTransaction, removeTransaction}) => {
    const EditableSpan = contentEditable('span')
    return (
        <Table bordered>
            <thead>
            <tr>
                <th>Transactions</th>
                <th className='text-right'>Price</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <AddTransactionRow addTransaction={addTransaction}/>
            {
                transactions.map(transaction => {
                    return (
                        <tr key={transaction.id}>
                            <td>
                                <EditableSpan value={transaction.description}/>
                            </td>
                            <td className='text-right'>
                                <EditableSpan value={transaction.price}/>
                            </td>
                            <td>
                                <Button className='btn-danger' onClick={() => removeTransaction(transaction.id)}>
                                    del
                                </Button>
                            </td>
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
}

export default TransactionTable