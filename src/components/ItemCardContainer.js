import { useEffect, useState } from "react";
import { fireStoneFetch ,fireStoneFetchFilter} from "../utility/customFetch";
const ItemCardContainer = (data)=>{
    let contadorCard=0;
    let limiteCard=3;
    const [productsList,setProductsList]= useState([]);
    useEffect(()=>{
        fireStoneFetchFilter(data.filtro,data.value)
                        .then(result => setProductsList(result))
                        .catch(error => console.log(error))
    },[data]);
    return(
        <>
        
        </>
    );
}
export default ItemCardContainer;