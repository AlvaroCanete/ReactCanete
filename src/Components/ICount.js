import React, { useState } from "react";
import '../App.css';

const ICount = ({stock, initial}) =>{
    const [cuenta, setCuenta] = useState(initial);

    const suma =() => {
        if (cuenta < stock){
            setCuenta(cuenta + 1)
        }
        else{
            alert("No hay stock disponible")
        }
    }
    const resta =() => {
        cuenta > 0 && setCuenta (cuenta -1)
    }

    const onAdd = () => {
        alert (`${cuenta} ${cuenta === 1 ? "producto" : "productos"} en tu carrito`)
    }
    
    return (
        <>
                <div className="Contador">
                    <button className='countButton'  onClick={resta}>-</button>
                    <p>{cuenta}</p>
                    <button className='countButton' onClick={suma}>+</button>
                </div>
                    <button className="addCartButton" onClick={onAdd}>Añadir al carrito</button>
        </>

    )
}

export default ICount 