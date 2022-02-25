import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider =({children})=>{

    const [cartList,setCartList]= useState([]);

    const addToCart = (item,cantidadAñadir)=>{
        const isInCart =cartList.find((itemCart)=> item.id === itemCart.id)
        if(isInCart){
            setCartList(
                cartList.map((item) => {return { ...item, cantidad: item.cantidad + cantidadAñadir};})
            );
        }
        else{
            setCartList([
                ...cartList, //spread operators
                {
                id: item.id,
                descripcion: item.descripcion,
                precio:  item.precio,
                cantidad: cantidadAñadir,
                imagen: item.imagen
            }]);
        }
        
    }
    const removeList = ()=>{
        setCartList([]);
    }
    const removeItem = (id)=>{
        setCartList(cartList.filter((item) => item.id !== id ));
        // Por alguna razon cuando presiono eliminar el item se borran todos los elementos
    }
    return(
        <CartContext.Provider value={{cartList,addToCart,removeList,removeItem}}>
            {children}
        </CartContext.Provider>
    );
}
export default CartContextProvider;