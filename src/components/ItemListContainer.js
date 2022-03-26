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
                            <Link to='/category/10'>¡OFERTAS!</Link>
                        </li>
                        <li>
                            <a href="../pages/encontra-Equipo.html">EQUIPOS ARMADOS</a>
                        </li>
                        <li>
                            <a href="../pages/notebooks.html">NOTEBOOKS Y ACCESORIOS</a>
                        </li>
                        <li>
                            <a href="../pages/categorias.html">COMBOS ACTUALIZACIÓN</a>
                        </li>
                        <li>
                            <a href="../pages/categorias.html">MICROPROCESADORES</a>
                        </li>
                        <li>
                            <a href="../pages/categorias.html">MOTHERBOARDS</a>
                        </li>
                        <li>
                            <a href="../pages/categorias.html">MEMORIAS RAM</a>
                        </li>
                        <li>
                            <a href="../pages/categorias.html">PLACAS DE VIDEO</a>
                        </li>
                        <li>
                            <a href="../pages/categorias.html">MONITORES Y PROYECTORES</a>
                        </li>
                        <li>
                            <a href="../pages/categorias.html">GABINETES Y FUENTES</a>
                        </li>
                        <li>
                            <a href="../pages/categorias.html">PERISFERICOS</a>
                        </li>
                        <li>
                            <a href="../pages/categorias.html">ALMACENAMIENTO</a>
                        </li>
                        <li>
                            <a href="../pages/categorias.html">SILLAS</a>
                        </li>
                        <li>
                            <a href="../pages/categorias.html">REFRIGERACIÓN</a>
                        </li>
                        <li>
                            <a href="../pages/categorias.html">REDES</a>
                        </li>
                        <li>
                            <a href="../pages/categorias.html">TABLETAS DIGITALIZADORAS</a>
                        </li>
                        <li>
                            <a href="../pages/categorias.html">CARTUCHOS</a>
                        </li>
                        <li>
                            <a href="../pages/categorias.html">ADAPTADORES/OTROS</a>
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