import { useEffect, useState} from 'react';
import Item from './Item';
import products from './products';
import { customFetch } from "../utility/customFetch";
import db from "../utility/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
const ItemList = (data) =>{
    const [productsList,setProductsList]= useState([]);
    useEffect(()=>{
        const fireStoneFetch = async ()=>{
            const querySnapshot = await getDocs(collection(db, "products"));
            return querySnapshot.docs.map( item =>  ({
                id: item.id,
                ...item.data()
             }))
        }
        if( typeof data.idCategory  === typeof undefined){
           /* customFetch(2000, products)
        .then(result => setProductsList(result))
        .catch(error => console.log(error))*/
        fireStoneFetch().then(result => setProductsList(result))
                        .catch(error => console.log(error))
        }
        else
        {
            customFetch(2000, products.filter(item => item.idCategoria === parseInt(data.idCategory)))
        .then(result => setProductsList(result))
        .catch(error => console.log(error))
        }
    },[data]);
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