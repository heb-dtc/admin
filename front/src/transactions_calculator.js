export const getTotal = (transactions) => {
    let sum = 0
    transactions.map(transaction =>
        sum += transaction.price
    )
    return sum
}

export const getTotalTaxes = (transactions) => {
    const taxPercentage = 4
    let sum = 0
    transactions.map(transaction => {
            const taxes = (taxPercentage * transaction.price) / 100
            sum += taxes
        }
    )
    return sum
}

export const getTotalToPay = (transactions) => {
    const totalTaxes = getTotalTaxes(transactions)
    const total =  getTotal(transactions)
    return total - totalTaxes
}