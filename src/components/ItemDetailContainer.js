import { useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';
import products from './products';
import { customFetch } from "../utility/customFetch";
import { useParams } from 'react-router-dom';
const ItemDetailContainer=()=>{
    const [data, setDato] = useState([]);
    const {idProd}= useParams();
    console.log(parseInt(idProd));
    useEffect(() => {
        customFetch(2000, products.find(item => item.id === parseInt(idProd)))
        .then(result => setDato(result))
        .catch(error => console.log(error))
        
    }, [idProd]);
    console.log(data);
    return(
        <div className="container">
            <ItemDetail 
            imagen= {data.imagen}
            descripcion={data.descripcion}
            precio= {data.precio}
            stock ={data.stock}/>
        </div>
    );
}
export default ItemDetailContainer;