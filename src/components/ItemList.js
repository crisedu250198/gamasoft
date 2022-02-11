import { useEffect, useState} from 'react';
import Item from './Item';
import products from './products';

const ItemList = () =>{
    const [productsList,setProductsList]= useState([]);
    function getProducts(products){
        return new Promise((resolve,reject)=>{
            if(products.length > 0){
                resolve(products)
            }else
            {
                reject('No se pudo cargar los productos..');
            }
        });
                              
    }
    useEffect(()=>{
        setTimeout(()=>{getProducts(products).then(data => setProductsList(data)).catch(error=>console.log(error))},2000);
    },[]);
    return(
        <>
        <div>
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