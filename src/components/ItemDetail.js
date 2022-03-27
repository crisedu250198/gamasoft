import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
const ItemDetail = (data)=>{
    const [itemCount,setItemCount] = useState(0);
    const dataContext = useContext(CartContext);
    const onAdd=(cantidad)=>{
        alert("Se agrego "+cantidad+" productos");
        setItemCount(cantidad);
        dataContext.addToCart(data,cantidad);
    }
 return(
     <div className="containerDetail">
         <div className="containerDetail_Imagenes">
         <img src= {data.imagen} alt="imagen producto"/>
         </div>

         <div className="containerDetail_Info">
            <h1>{data.descripcion}</h1>
            <div className="containerDetail_Info--Precio">
            <h2 >Precio: ${data.precio}</h2> 
            </div>
            <h3>¡Hasta 12 CUOTAS SIN INTERÉS!</h3>
            <img src= "https://firebasestorage.googleapis.com/v0/b/gamasoft-5d549.appspot.com/o/tarjeas_sin.jpg?alt=media&token=cac04329-3222-4cf3-81a7-e4bd0c56addf"/>
            { 
            itemCount === 0
            ? <ItemCount stock={data.stock} initial={itemCount} onAdd={onAdd}  />
            : <Link to='/cart' style={{textDecoration: "none"}}><button className="containerAddCart--button">CHECKOUT</button></Link>
         }
         </div>
         
     </div>
 );
}
export default ItemDetail;