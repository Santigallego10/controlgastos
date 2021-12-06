import React from 'react'

export const TransactionList = () => {
    return (
        <>
        <h3>Movimientos</h3>
        <ul class="list">
            <li className="minus">
                Salario <span>$400.000</span><button class="delete-btn">X</button>
            </li>
        </ul>
        </>
    )
}

export default TransactionList;
