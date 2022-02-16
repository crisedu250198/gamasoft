import { useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';
import products from './products';
import { customFetch } from "../utility/customFetch";
const ItemDetailContainer=()=>{
    const [data, setDato] = useState([]);
    useEffect(() => {

        customFetch(2000, products[1])
        .then(result => setDato(result))
        .catch(error => console.log(error))
        
    }, []);
    return(
        <div className="container">
            <ItemDetail 
            imagen= {data.imagen}
            descripcion={data.descripcion}
            precio= {data.precio}/>
        </div>
    );
}
export default ItemDetailContainer;