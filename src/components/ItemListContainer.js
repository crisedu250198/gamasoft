import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';
const ItemListContainer = (props) =>{
    const {idCategory}= useParams();
    return(
        <>
        <h1>{props.texto}</h1>
        <ItemList idCategory={idCategory}/>
        </>
    );
}
export default ItemListContainer;