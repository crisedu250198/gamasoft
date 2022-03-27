import { CartContext } from './CartContext';
import { useContext, useEffect, useState } from "react";
import { customFetch } from '../utility/customFetch';
import { Link } from "react-router-dom";
const CartModalTotal = ()=>{
    const data = useContext(CartContext);
    const [cart,setCart]= useState([]);
    useEffect(() => {
    customFetch(200, data.cartList)
    .then(result => setCart(result))
    .catch(error => console.log(error))
    }, [data]);

     return(
         <>
         {
            cart.length > 0 
            ? <>
                <h3>SUBTOTAL: {"$"+data.calcSubtotal()+".00"} </h3>
                <Link to="/cart"><button data-bs-dismiss="offcanvas">IR AL CARRITO</button> </Link>
              </>
            :<h3>TU CARRITO ESTA VACIO...</h3>

         }
         </>
     );       
}
export default CartModalTotal;