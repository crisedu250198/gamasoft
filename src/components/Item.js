import { Link } from "react-router-dom";

const Item =(data)=>{
    return(
        <>
        <article key={data.id}>
            <img src={data.imagen} alt="imagen de producto"/>
            <h4> {data.descripcion}</h4>
            <div>
                <h5> <small>Precio Web</small> <br/>$ {data.precio}.00</h5>
                <Link to={'/item/'+data.id} ><button>Comprar</button></Link>
            </div> 
        </article>
        </>
    );
}
export default Item;