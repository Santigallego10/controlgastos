import React, {useState} from 'react'

export const AddTransaction = () => {
    const [text, setText] = useState("")
    const [amount, setAmount] = useState("0")
    return (
        <>
        <h3>Añadir nueva transacción</h3>
        <form>
            <div className="form-control">
                <label htmlFor="text">Motivo:</label>
                <input type="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Ingrese el motivo..."/>
            </div>
            <div className="form-control">
                <label htmlFor="amount"
                  >Cantidad: <br />
                  (Negativa - gasto, positiva -ingreso)</label
                >
                <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)} placeholder="Ingrese la cantidad..." />
            </div>
            <button className="btn">Añadir transacción</button>
            </form>  
        </>
    )
}
