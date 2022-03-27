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
                <button onClick={reduce}><p>-</p></button>
                <p id="countTexto">{cantidad}</p>
                <button onClick={increment}><p>+</p></button>
            </div>
            {
                stock && cantidad

                ? <button className="containerAddCart--button" onClick={() => onAdd(cantidad)}>AGREGAR</button> 
                : <button className="containerAddCart--buttonDisabled" disabled>AGREGAR</button>
            }
        </div>
        
        </>
    );
}

export default ItemCount;