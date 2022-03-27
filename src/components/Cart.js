import { CartContext } from "./CartContext";
import { useContext, useEffect, useState } from "react";
import { customFetch } from "../utility/customFetch";
import { Link } from "react-router-dom";
import CartDetail from "./CartDetail";
const Cart =() =>{
     const data = useContext(CartContext);
     const [cart,setCart]= useState([]);
     useEffect(() => {
        customFetch(0, data.cartList)
        .then(result => setCart(result))
        .catch(error => console.log(error))
        
    }, [data]);
    
    
    return(
        <>
        
        <div className="container ">
            <h1 className="containerCart_Titulo">CARRITO DE COMPRAS</h1>
            <div className=" container containerCart">
                {
                    cart.length > 0 
                    ? <CartDetail/>
                    :<>
                    <div className="emptyCart">
                        <img src="https://firebasestorage.googleapis.com/v0/b/gamasoft-5d549.appspot.com/o/empty_cart.png?alt=media&token=05fd2e70-87bd-4014-bcb4-59533fcf9e34"/>    
                        <h2>TU CARRITO ESTA VACIO...</h2>
                        <Link to='/'><button>SEGUIR COMPRANDO</button></Link>
                        </div>
                    </>

                }
                
            </div>
            
            
        </div>
        </>
    )
} 

export default Cart;