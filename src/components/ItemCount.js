import { useState } from "react";

const ItemCount = ()=>{
    const stock=50;
    const [cantidad,setCantidad]= useState(1);
    const increment=()=>{
        if(cantidad<stock){
            setCantidad(cantidad+1);
        }
        
    }
    const reduce=()=>{
        if(cantidad>1){
            setCantidad(cantidad-1);
        }
        
    }
    return(
        <>
        <div className="containerAddCart">
            <div className="countItems">
                <button onClick={reduce}>-</button>
                <p>{cantidad}</p>
                <button onClick={increment}>+</button>
            </div>
            <button>Comprar</button>
        </div>
        
        </>
    );
}

export default ItemCount;