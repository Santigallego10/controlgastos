import React from 'react'

export default function incomeExpenses() {
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Ingresos</h4>
                <p className="money plus">+$0.00</p>
            </div>
            <div>
                <h4>Gastos</h4>
                <p className="money minus">-$0.00</p>
            </div>
        </div>
    )
}
