import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider =({children})=>{

    const [cartList,setCartList]= useState([]);

    const addToCart = (item,cantidadAñadir)=>{
        const isInCart =cartList.find((itemCart)=> item.id === itemCart.id)
        console.log(isInCart);
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
    const calcCantItems = () =>{
        let cantidadItems= cartList.map(item => item.cantidad);
        return cantidadItems.reduce(((previousValue, currentValue) => previousValue + currentValue),0);
    }  
    const calcTotalPorItem= (id) =>{
        let index = cartList.map(item => item.id).indexOf(id);
        return cartList[index].precio * cartList[index].cantidad;
        }  

    const calcSubtotal= () =>{
        let totalPorItem = cartList.map(item => calcTotalPorItem(item.id));
        return totalPorItem.reduce(((previousValue, currentValue) => previousValue + currentValue),0);
        }  
    return(
        <CartContext.Provider value={{cartList,addToCart,removeList,removeItem,calcSubtotal,calcCantItems}}>
            {children}
        </CartContext.Provider>
    );
}
export default CartContextProvider;