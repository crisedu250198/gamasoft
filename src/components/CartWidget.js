
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import CartModal from './CartModal';
import CartModalTotal from './CartModalTotal';
const CartWidget = () =>{
    const data = useContext(CartContext);
    return(
        <>
        <div className="btnCarrito">
            <button  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight1" aria-controls="offcanvasRight"><img src="https://firebasestorage.googleapis.com/v0/b/gamasoft-5d549.appspot.com/o/carrito.png?alt=media&token=c1e626c5-311e-4847-9a7c-4c52a8cde870" alt="Carrito"/> <p>Carrito</p> </button>
            {
                data.cartList.length > 0 &&  
                <div className='btnCarrito__contador'>
                    <span>{data.calcCantItems()}</span>
                </div>
            }
                      
        </div>
    
        <div className="offcanvas offcanvas-end modalCarrito" tabindex="-1" id="offcanvasRight1" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header modalCarrito--Header">
                <h5 id="offcanvasRightLabel" ><img src="https://firebasestorage.googleapis.com/v0/b/gamasoft-5d549.appspot.com/o/carrito.png?alt=media&token=c1e626c5-311e-4847-9a7c-4c52a8cde870" alt="Carrito"/>CARRITO DE COMPRAS</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body modalCarrito--body" >
                <div className="modalCarrito--body_Productos" id="carrito">
                    <CartModal/>
                </div>
                <div className="modalCarrito--body_Total" id="Totalcarrito">
                    <CartModalTotal/>
                </div>
            </div>
        </div>
        </>
    );
}
export default CartWidget;