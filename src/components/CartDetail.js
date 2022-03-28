import { CartContext } from "./CartContext";
import { useContext, useEffect, useState } from "react";
import { customFetch } from "../utility/customFetch";
import { Link } from "react-router-dom";

const CartDetail = () => {
    const data = useContext(CartContext);
     const [cart,setCart]= useState([]);
     useEffect(() => {
        customFetch(200, data.cartList)
        .then(result => setCart(result))
        .catch(error => console.log(error))
        
    }, [data]);
    return(
        <>
        <div className="containerCart_carrito col-8">
                        
                        {   
                            cart.length > 0 && cart.map((item) =>(
                            <div class="cardCarritoWindow">
                                <img src= {item.imagen} alt=""/>
                                <h3>{item.descripcion}</h3>
                                <div class="cardCarritoWindow__info">
                                    <h4>Cantidad: {item.cantidad}</h4>
                                    <div class="cardCarritoWindow__info-Precio">
                                        <h5>Precio Web</h5>
                                        <h6>$ {item.precio}.00</h6>
                                    </div>  
                                </div>
                                <button onClick={() => data.removeItem(item.id)}>Eliminar</button>  
                            </div> 
                            )) 
                            
                        }
                        
        </div>
        <div className="container containerCart_presupuesto col-5">
            <h1>RESUMEN DE COMPRA:</h1>
            <h3>SUBTOTAL: {"$"+data.calcSubtotal()+".00"} </h3>
            <h3>ENVIO: $400.00</h3>
            <h2>TOTAL: {"$"+(data.calcSubtotal()+400)+".00"}</h2>
            <div className="containerCart_presupuesto--Butones">
            <Link to="/finishCart"><button>FINALIZAR COMPRA</button></Link>
            <button onClick={data.removeList}>VACIAR CARRITO</button>
            </div>
        </div>
        </>
    );
}
export default CartDetail;