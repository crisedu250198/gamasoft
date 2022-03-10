import { CartContext } from "./CartContext";
import { useContext, useEffect, useState } from "react";
import { customFetch } from "../utility/customFetch";
import { Link } from "react-router-dom";
import { collection, doc, increment, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import db from "../utility/firebaseConfig";
import { async } from "@firebase/util";
const Cart =() =>{
     const data = useContext(CartContext);
     const [cart,setCart]= useState([]);
     useEffect(() => {
        customFetch(200, data.cartList)
        .then(result => setCart(result))
        .catch(error => console.log(error))
        
    }, [data]);
    const createOrder = ()=>{
        let order = {
            buyer:{
                email: "cris@gmail.com",
                name: "christian prudencio",
                phone: "2131321233"
            },
            items: data.cartList.map((item)=>{
                return {id: item.id, descripcion: item.descripcion, cantidad: item.cantidad, precio: item.precio};
            }),
            total: data.calcSubtotal + 400,
            fecha: serverTimestamp()
        }
        const createOrderInFiresore = async () =>{
            const newOrderRef = doc(collection(db,"orders"));
            await setDoc(newOrderRef,order);
            return newOrderRef;
        }
        createOrderInFiresore().then(result => {alert('Tu pedido fue creado con exito: '+ result.id);
                                                data.cartList.map(async (item) => {
                                                    const itemRef = doc(db,"products",item.id);
                                                    await updateDoc(itemRef,{
                                                        stock: increment(-item.cantidad)
                                                    });
                                                }); 
                                                data.removeList();})
                               .catch(error => console.log(error));
    }
    
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
                <button onClick={createOrder}>FINALIZAR COMPRA</button>
                </div>
            }
            
        </div>
        </>
    )
} 

export default Cart;