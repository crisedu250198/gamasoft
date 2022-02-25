import { CartContext } from "./CartContext";
import { useContext, useEffect, useState } from "react";
import { customFetch } from "../utility/customFetch";
const Cart =() =>{
     const data = useContext(CartContext);
     const [cart,setCart]= useState([]);
     useEffect(() => {
        customFetch(2000, data.cartList)
        .then(result => setCart(result))
        .catch(error => console.log(error))
        
    }, [data]);
    return(
        <>
        
        <div className="container">
            <h1>Carrito de compras</h1>
            {
                cart.map((item) =>(
                <div class="cardCarrito">
                    <img src= {item.imagen} alt=""/>
                    <h3>{item.descripcion}</h3>
                    <div class="cardCarrito__info">
                        <h4>Cantidad: {item.cantidad}</h4>
                        <div class="cardCarrito__info-Precio">
                            <h5>Precio Web</h5>
                            <h6>$ {item.precio}.00</h6>
                        </div>  
                    </div>
                    <button onClick={() => data.removeItem(item.id)}>Eliminar</button>  
                </div>
                ))
            }
            <button onClick={data.removeList}>Vaciar Carrito</button>
        </div>
        </>
    )
} 

export default Cart;