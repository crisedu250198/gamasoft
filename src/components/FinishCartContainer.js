import { CartContext } from "./CartContext";
import { useContext,useState } from "react";
import { collection, doc, increment, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import db from "../utility/firebaseConfig";
import { Link } from "react-router-dom";
const FinishCartContainer =()=>{
    const data = useContext(CartContext);
    const [informacion,setInformacion] = useState({
        nombre:'',
        apellido:'',
        email:'',
        direccion:'',
        departamento:'',
        codigoPostal:'',
        ciudad:'',
        provincia:'',
        telefono:''
    });
    const handleInputChange = (event) =>{
        setInformacion({
            ...informacion,
            [event.target.name]: event.target.value
        });
    }
    const createOrder = ()=>{
        let calcTotal = data.calcSubtotal() + 400;
        let order = {
            
            buyer:informacion,
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
                <h1 className="info_Titulo">DIRECCIÓN DE ENVÍO</h1>
                <div className="info_Envio ">
                    <div className="info_Envio--Input">
                    <label>Nombre:</label> <input type="text" id="Nombre" placeholder="Ingrese su Nombre" name="nombre" onChange={handleInputChange} />                
                    </div>
                    <div  className="info_Envio--Input">
                    <label>Apellido:</label><input type="text" id="Apellido" placeholder="Ingrese su Apellido" name="apellido" onChange={handleInputChange}/>                    
                    </div>
                    <div className="info_Envio--Input">
                    <label>Email:</label> <input type="email" id="email_contacto" placeholder="Ingrese su correo electrónico" name="email" onChange={handleInputChange}/>                    
                    </div>
                    <div className="info_Envio--Input">
                    <label>DIRECCIÓN:</label><input type="text" id="Direccion" placeholder="Ingrese su Dirección" name="direccion" onChange={handleInputChange}/>
                    </div>
                    <div className="info_Envio--Input">
                    <label>Departamento:</label><input type="text" id="Departamento" placeholder="Ingrese su Departamento" name="departamento" onChange={handleInputChange}/>                       
                    </div>
                    <div className="info_Envio--Input">
                    <label>Codigo Postal</label><input type="text" id="CodigoPostal" placeholder="Ingrese su Codigo Postal" name="codigoPostal" onChange={handleInputChange}/>                    
                    </div>
                    <div className="info_Envio--Input">
                    <label>Ciudad:</label> <input type="text" id="Ciudad" placeholder="Ingrese su Ciudad" name="ciudad" onChange={handleInputChange}/>                    
                    </div>
                    <div className="info_Envio--Input">
                    <label>Provincia:</label><input type="text" id="Provincia" placeholder="Ingrese su Provincia" name="provincia" onChange={handleInputChange}/>                    
                    </div>
                    <div className="info_Envio--Input">
                    <label>Teléfono:</label><input type="text" id="Telefono" placeholder="Ingrese su Teléfono" name="telefono" onChange={handleInputChange}/>                     
                    </div>
                    <div className="info_Envio--botones" >
                        <Link to="/"><button id="info_Envio--botonFinalizarCompra" onClick={createOrder}>FINALIZAR COMPRA</button></Link>
                        <Link to="/Cart"><button id="info_Envio--botonCancelar">CANCELAR</button></Link> 
                    </div>
                </div>
                
            </div>
        </>
    );
}
export default FinishCartContainer;