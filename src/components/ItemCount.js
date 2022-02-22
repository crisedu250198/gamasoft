import { useState , useEffect } from "react";

const ItemCount = ({stock=0,initial=1,onAdd})=>{
    const [cantidad,setCantidad]= useState(initial);
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
    useEffect(() => {
        setCantidad(initial);
       
      },[]);
   
    return(
        <>
        <div className="containerAddCart">
            <div className="countItems">
                <button onClick={reduce}>-</button>
                <p>{cantidad}</p>
                <button onClick={increment}>+</button>
            </div>
            {
                stock && cantidad

                ? <button className="quantityAdd-button" onClick={() => onAdd(cantidad)}>Agregar</button> 
                : <button disabled>Agregar</button>
            }
        </div>
        
        </>
    );
}

export default ItemCount;