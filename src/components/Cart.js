import { CartContext } from "./CartContext";
import { useContext, useEffect, useState } from "react";
import { customFetch } from "../utility/customFetch";
import { Link } from "react-router-dom";
const Cart =() =>{
     const data = useContext(CartContext);
     const [cart,setCart]= useState([]);
     useEffect(() => {
        customFetch(200, data.cartList)
        .then(result => setCart(result))
        .catch(error => console.log(error))
        
    }, [data]);
    return(
        <>
        
        <div className="container">
            <h1>Carrito de compras</h1>
            {   
                cart.length > 0 
                ? cart.map((item) =>(
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
                : <h2>Carrito vacio...</h2>
            }
            {
                cart.length > 0 
                ?<button onClick={data.removeList}>Vaciar Carrito</button>
                :<><button disabled>Vaciar Carrito</button> <Link to='/'><button>Seguir Comprando</button></Link></>
            }
            {
                cart.length > 0 && <div className="container presupusto">
                <h1>Resumen de Compra:</h1>
                <h3>Subtotal: {"$"+data.calcSubtotal()+".00"} </h3>
                <h3>Envio: $400.00</h3>
                <h2>Total: {"$"+(data.calcSubtotal()+400)+".00"}</h2>
                </div>
            }
            
        </div>
        </>
    )
} 

export default Cart;