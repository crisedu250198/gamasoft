import ItemList from "./ItemList";

const ItemListContainer = (props) =>{
    return(
        <>
        <h1>{props.texto}</h1>
        <ItemList/>
        </>
    );
}
export default ItemListContainer;