import { useEffect, useState} from 'react';
import Item from './Item';
import { fireStoneFetch ,fireStoneFetchFilter} from "../utility/customFetch";
const ItemList = (data) =>{
    const [productsList,setProductsList]= useState([]);
    useEffect(()=>{

        if( typeof data.idCategory  === typeof undefined){
        
        fireStoneFetch().then(result => setProductsList(result))
                        .catch(error => console.log(error))
        }
        else
        {
        
        fireStoneFetchFilter("idCategoria",parseInt(data.idCategory))
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