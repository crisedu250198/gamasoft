import ItemCount from "./ItemCount";

const ItemDetail= (data)=>{
 return(
     <div className="containerDetail">
         <div className="containerDetail_Imagenes">
         <img src= {data.imagen} alt="imagen producto"/>
         </div>

         <div className="containerDetail_Info">
            <h1>{data.descripcion}</h1>
            <h2>Precio: {data.precio}</h2>
            <ItemCount  />
         </div>
     </div>
 );
}
export default ItemDetail;