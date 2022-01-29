import imgCarrito from '../images/carrito.png';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const CartWidget = () =>{
    return(
        <>
        <div className="containerBot__ContainerIconos--btn">
            <button  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight1" aria-controls="offcanvasRight"><img src={imgCarrito} alt="Carrito"/> <p>Carrito</p> </button>
        </div>
    
        <div className="offcanvas offcanvas-end modalCarrito" tabindex="-1" id="offcanvasRight1" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header modalCarrito--Header">
                <h5 id="offcanvasRightLabel" ><img src={imgCarrito} alt="Carrito"/>CARRITO DE COMPRAS</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body modalCarrito--body" >
                <div className="modalCarrito--body_Productos" id="carrito">
                </div>
                <div className="modalCarrito--body_Total" id="Totalcarrito">
                    <h3>TU CARRITO ESTA VACIO...</h3>
                </div>
            </div>
        </div>
        </>
    );
}
export default CartWidget;