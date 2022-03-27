import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return(
        
        <header>
            <div className="containerHeader">
                <div className="containerTop">
                    <nav className="containerTop__Nav container">
                        <ul className="pad-0">
                            <li className="containerTop__ListNavLeft">
                                <a href="#Nosotros">Nosotros</a>
                            </li>
                            <li className="containerTop__ListNavLeft">
                                <a href="https://www.google.com/maps" target="_blank">Sucursales</a>
                            </li>
                            <li className="containerTop__ListNavLeft">
                                <a href="https://web.whatsapp.com/" target="_blank">Centro de Ayuda</a>
                            </li>
                            <li className="containerTop__ListNavLeft">
                                <a href="https://www.facebook.com/" target="_blank"><img src="https://firebasestorage.googleapis.com/v0/b/gamasoft-5d549.appspot.com/o/facebook.png?alt=media&token=5f615edb-7369-45e9-8089-7a2b488f926d" alt="Icono de Facebook"/></a>
                            </li>
                            <li className="containerTop__ListNavLeft">
                                <a href="https://www.instagram.com/" target="_blank"><img src="https://firebasestorage.googleapis.com/v0/b/gamasoft-5d549.appspot.com/o/instagram.png?alt=media&token=91c0550e-86c7-4a34-bea3-58d622242c71" alt="Icono de instagram"/></a>
                            </li>
                            <li className="containerTop__ListNavLeft">
                                <a href="https://web.whatsapp.com/" target="_blank"><img src="https://firebasestorage.googleapis.com/v0/b/gamasoft-5d549.appspot.com/o/whatsapp.png?alt=media&token=30c46af7-e368-4a5b-826d-3b3b0641e452" alt="Icono de Whatsapp"/></a>
                            </li>
                        </ul>
                    </nav>   
                </div>
            
                <div className="containerBot container">
                    
                    <Link to='/'><img src="https://firebasestorage.googleapis.com/v0/b/gamasoft-5d549.appspot.com/o/LogoBlanco.png?alt=media&token=45fb7954-f878-4c66-aaf7-36edf70bf89a" alt="Logo" className="containerBot__Logo"/></Link> 
                    
                    <div className="containerBot__Search">
                        <input type="search" name="entrada de texto" id="entrada_de_texto" placeholder="    Eso que querés... Buscalo acá" className="search__Input"/>
                        <button className="search__InputBtn"><img src="https://firebasestorage.googleapis.com/v0/b/gamasoft-5d549.appspot.com/o/lupa.png?alt=media&token=a341afea-8f13-4e9b-a593-c9ed14165c8e" alt="Lupa"/></button>
                    </div>


                    <div className="menuResponsive">
                        <button className="btn btn-primary btn-primary--cfg" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><img src="https://firebasestorage.googleapis.com/v0/b/gamasoft-5d549.appspot.com/o/hambur.svg?alt=media&token=b02c03f2-df04-41b3-96bc-b7c2bd1ff634" className="btn-menu--size"/></button>
                        <div className="offcanvas offcanvas-end offcanvas--back" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                            <div className="offcanvas-header">
                                <h5 id="offcanvasRightLabel">Menú</h5>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <div className="containerBot__ContainerIconos">
                                    <Link to='/favorite'><img src="https://firebasestorage.googleapis.com/v0/b/gamasoft-5d549.appspot.com/o/corazon.png?alt=media&token=c6611f55-9d80-4ffc-ba50-117af083b58c" alt="Favoritos"/>Favoritos</Link>
                                    <div className="containerBot__ContainerIconos--btn">
                                        <button type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal" id="btnAccederRes">
                                            <img src="https://firebasestorage.googleapis.com/v0/b/gamasoft-5d549.appspot.com/o/usuario.png?alt=media&token=35bd2cb6-849e-483b-8a10-283265d81e5b" alt="Iniciar Sesion/Registrarte"/>
                                            <p>Acceder</p> 
                                        </button>
                                    </div>
                                    <div className="containerBot__ContainerIconos--btn">
                                        <button  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight1" aria-controls="offcanvasRight"><img src="https://firebasestorage.googleapis.com/v0/b/gamasoft-5d549.appspot.com/o/carrito.png?alt=media&token=c1e626c5-311e-4847-9a7c-4c52a8cde870" alt="Carrito"/> <p>Carrito</p> </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                    <div className="menu-no-phone">

                        <div className="containerBot__ContainerIconos">
                            <Link to='/favorite'><img src="https://firebasestorage.googleapis.com/v0/b/gamasoft-5d549.appspot.com/o/corazon.png?alt=media&token=c6611f55-9d80-4ffc-ba50-117af083b58c" alt="Favoritos"/><p>Favoritos</p></Link>
                            <div className="containerBot__ContainerIconos--btn">
                                <button type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal" id="btnAcceder">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/gamasoft-5d549.appspot.com/o/usuario.png?alt=media&token=35bd2cb6-849e-483b-8a10-283265d81e5b" alt="Iniciar Sesion/Registrarte"/>
                                    <p>Acceder</p> 
                                </button>
                            </div>
                            <CartWidget/>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h1 className="modal-title" id="exampleModalLabel">INICIAR SESION</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form action="" method="POST" id="formularioRegistrarLogin">
                                    <div>
                                        <h2>Ya soy cliente</h2>
                                    </div>
                                    <div id="modal-body--input">
                                        <label for="">Correo electrónico</label>
                                        <br/>
                                        <input type="email" name="_replyto" id="email_login" placeholder="Ingrese su correo electrónico"/>
                                    </div>
                                    <div id="modal-body--input">
                                        <label for="">Contraseña</label>
                                        <br/>
                                        <input type="password" name="pass_login" id="pass_login" placeholder="Ingrese su contraseña"/>
                                    </div>
                                    <div className="modal-body--button">
                                        <input type="button" value="INGRESAR" id="btnAceptar_LogIn" data-bs-dismiss="modal"/> 
                                    </div>
                                </form>
                                
                            </div>
                            <div className="modal-footer" id="modalFooter">
                                <input type="button" value="Registrar nueva cuenta" className="backgroundRegistrarse" />
                                <input type="button" value="Continuar con Facebook" className="backgroundFacebook" />
                                <input type="button" value="Continuar con Google +" className="backgroundGoogle" />                
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
            <div class="containerBot__ContainerMenu">
                <nav class="container">
                    <ul class="pad-0">
                        <li>
                            <Link to='/category/'>Categorias</Link>
                        </li>
                        <li>
                            <Link to='/category/1'>Arma tu PC </Link>
                        </li>
                        <li>
                            <Link to='/category/2'>Encontra tu Equipo</Link>
                        </li>
                        <li>
                            <Link to='/category/3'>Notebooks</Link>
                        </li>
                        <li>
                            <Link to='/category/4'>¡Ofertas!</Link>
                        </li>
                    </ul>
                </nav>     
            </div>
              
        </header>
        

    );

}
export default NavBar;