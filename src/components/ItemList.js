import { useEffect, useState} from 'react';
import Item from './Item';
import products from './products';
import { customFetch } from "../utility/customFetch";
const ItemList = () =>{
    const [productsList,setProductsList]= useState([]);
    useEffect(()=>{
        customFetch(2000, products)
        .then(result => setProductsList(result))
        .catch(error => console.log(error))
    },[]);
    return(
        <>
        <div className='container'>
            {
              productsList.map(item => {
                return(
                    <Item 
                    id={item.id}
                    imagen={item.imagen}
                    descripcion={item.descripcion}
                    precio={item.precio}/>
                );
              })
            
            }
            
        </div>
        </>
    );
}
export default ItemList;