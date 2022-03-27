import ItemList from "./ItemList";
import { Link, useParams } from 'react-router-dom';
const ItemListContainer = (props) =>{
    const {idCategory}= useParams();
    return(
        <>
        <div className="container containerCuerpoCateg">
            <div className="containerCateg ">
                <div className="containerListCateg">
                    <ul>
                        <li>
                            <Link to='/category/4'>¡OFERTAS!</Link>
                        </li>
                        <li>
                            <Link to='/category/2'>EQUIPOS ARMADOS</Link>
                        </li>
                        <li>
                            <Link to='/category/3'>NOTEBOOKS Y ACCESORIOS</Link>
                        </li>
                        <li>
                            <Link to='/category/5'>COMBOS ACTUALIZACIÓN</Link>
                        </li>
                        <li>
                            <Link to='/category/6'>MICROPROCESADORES</Link>
                        </li>
                        <li>
                            <Link to='/category/7'>MOTHERBOARDS</Link>
                        </li>
                        <li>
                            <Link to='/category/8'>MEMORIAS RAM</Link>
                        </li>
                        <li>
                            <Link to='/category/9'>PLACAS DE VIDEO</Link>
                        </li>
                        <li>
                            <Link to='/category/10'>MONITORES Y PROYECTORES</Link>
                        </li>
                        <li>
                            <Link to='/category/11'>GABINETES Y FUENTES</Link>
                        </li>
                        <li>
                            <Link to='/category/12'>PERISFERICOS</Link>
                        </li>
                        <li>
                            <Link to='/category/13'>ALMACENAMIENTO</Link>
                        </li>
                        <li>
                            <Link to='/category/14'>SILLAS</Link>
                        </li>
                        <li>
                            <Link to='/category/15'>REFRIGERACIÓN</Link>
                        </li>
                        <li>
                            <Link to='/category/16'>REDES</Link>
                        </li>
                        <li>
                            <Link to='/category/17'>DIGITALIZADORAS</Link>
                        </li>
                        <li>
                            <Link to='/category/18'>CARTUCHOS</Link>
                        </li>
                        <li>
                            <Link to='/category/19'>ADAPTADORES/OTROS</Link>
                        </li>
                    </ul>
                    
                </div>
                
                <div className="containerEncabezado">
                    <h1>CATEGORIAS</h1>
                    <div className="containerOrdenar">
                        <label for="ordenar">Ordenar por:</label>
                        <select name="ordenar" id="ordenar">
                            <option value="Seleccionar">Seleccionar</option> 
                            <option value="Menor Precio">Menor Precio</option>
                            <option value="Mayor Precio">Mayor Precio</option>
                        </select>
                    </div>
                </div>
                <ItemList idCategory={idCategory}/>
                
            </div>   
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
            </nav>
        </div>
        </>
    );
}
export default ItemListContainer;