import { CartContext } from "./CartContext";
import { useContext } from "react";
import { collection, doc, increment, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import db from "../utility/firebaseConfig";
const FinishCartContainer =()=>{
    const data = useContext(CartContext);
    const createOrder = ()=>{
        let calcTotal = data.calcSubtotal() + 400;
        let order = {
            
            buyer:{
                email: "cris@gmail.com",
                name: "christian prudencio",
                phone: "2131321233"
            },
            items: data.cartList.map((item)=>{
                return {id: item.id, descripcion: item.descripcion, cantidad: item.cantidad, precio: item.precio};
            }),
             
            total: calcTotal,
            fecha: serverTimestamp()
        }
        const createOrderInFiresore = async () =>{
            const newOrderRef = doc(collection(db,"orders"));
            await setDoc(newOrderRef,order);
            return newOrderRef;
        }
        createOrderInFiresore().then(result => {alert('Tu pedido fue creado con exito: '+ result.id);
                                                data.cartList.map(async (item) => {
                                                    const itemRef = doc(db,"products",item.id);
                                                    await updateDoc(itemRef,{
                                                        stock: increment(-item.cantidad)
                                                    });
                                                }); 
                                                data.removeList();})
                               .catch(error => console.log(error));
    }
    
    return(
        <>
        <div className="container">
            <h1>INFORMACIÓN DE CONTACTO</h1>
            <input type="email" name="_replyto" id="email_contacto" placeholder="Ingrese su correo electrónico"/>
            <h1>DIRECCIÓN DE ENVÍO</h1>
            <div className="info_Envio">
                <input type="text" id="Nombre" placeholder="Nombre"/>
                <input type="text" id="Apellido" placeholder="Apellido"/>
                <input type="text" id="Direccion" placeholder="Dirección"/>
                <input type="text" id="Departamento" placeholder="Departamento"/>
                <input type="text" id="CodigoPostal" placeholder="Código Postal"/>
                <input type="text" id="Ciudad" placeholder="Ciudad"/>
                <input type="text" id="Provincia" placeholder="Provincia"/>
                <input type="text" id="Telefono" placeholder="Teléfono"/>
                <button onClick={createOrder}>FINALIZAR COMPRA</button>
            </div>
        </div>
        
        
        

        </>
    );
}
export default FinishCartContainer;