/*
import React, {useEffect, useState} from "react";

const ConsolidatedTransactionTable = () => {

    const [consolidatedTransactions, setConsolidatedTransactions] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url)

            const data = await response.json()
            setConsolidatedTransactions(data)
        }
        fetchData()
    }, [])

    return (
        <ul>
            {consolidatedTransactions.map((consolidatedTransactions) => (
                <li key={consolidatedTransactions.id}>
                    {consolidatedTransactions.parent_transaction.description} -
                    {consolidatedTransactions.parent_transaction.amount} -
                    {consolidatedTransactions.parent_transaction.date} -
                </li>
            ))}
        </ul>
    )
}

export default ConsolidatedTransactionTable*/
