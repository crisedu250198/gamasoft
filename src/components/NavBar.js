import imgFace from '../images/facebook.png';
import imgInsta from '../images/instagram.png';
import imgWsp from '../images/whatsapp.png';
import logo from '../images/LogoBlanco.png';
import imgLupa from '../images/lupa.png';
import imghamb from '../images/hambur.svg';
import imgUser from '../images/usuario.png';
import imgCarrito from '../images/carrito.png';
import imgFav from '../images/corazon.png';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
const NavBar = () => {
    return(
        <div className="containerHeader">
            <div className="containerTop">
                <nav className="containerTop__Nav container">
                    <ul className="pad-0">
                        <li className="containerTop__ListNavLeft">
                            <a href="#Nosotros">Nosotros</a>
                        </li>
                        <li class="containerTop__ListNavLeft">
                            <a href="https://www.google.com/maps" target="_blank">Sucursales</a>
                        </li>
                        <li className="containerTop__ListNavLeft">
                            <a href="https://web.whatsapp.com/" target="_blank">Centro de Ayuda</a>
                        </li>
                        <li className="containerTop__ListNavLeft">
                            <a href="https://www.facebook.com/" target="_blank"><img src={imgFace} alt="Icono de Facebook"/></a>
                        </li>
                        <li className="containerTop__ListNavLeft">
                            <a href="https://www.instagram.com/" target="_blank"><img src={imgInsta} alt="Icono de instagram"/></a>
                        </li>
                        <li className="containerTop__ListNavLeft">
                            <a href="https://web.whatsapp.com/" target="_blank"><img src={imgWsp} alt="Icono de Whatsapp"/></a>
                        </li>
                    </ul>
                </nav>   
            </div>
            
            <div className="containerBot container">
                
                <a href="index.html"><img src={logo} alt="Logo" className="containerBot__Logo"/></a>
                
                <div className="containerBot__Search">
                    <input type="search" name="entrada de texto" id="entrada_de_texto" placeholder="    Eso que querés... Buscalo acá" className="search__Input"/>
                    <button className="search__InputBtn"><img src={imgLupa} alt="Lupa"/></button>
                </div>


                <div className="menuResponsive">
                    <button className="btn btn-primary btn-primary--cfg" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><img src={imghamb} className="btn-menu--size"/></button>
                    <div className="offcanvas offcanvas-end offcanvas--back" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div className="offcanvas-header">
                            <h5 id="offcanvasRightLabel">Menú</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <div className="containerBot__ContainerIconos">
                                <a href="pages/favoritos.html"><img src={imgFav} alt="Favoritos"/>Favoritos</a>
                                <div className="containerBot__ContainerIconos--btn">
                                    <button type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal" id="btnAccederRes">
                                        <img src={imgUser} alt="Iniciar Sesion/Registrarte"/>
                                        <p>Acceder</p> 
                                    </button>
                                </div>
                                <div className="containerBot__ContainerIconos--btn">
                                    <button  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight1" aria-controls="offcanvasRight"><img src={imgCarrito} alt="Carrito"/> <p>Carrito</p> </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                
                <div className="menu-no-phone">

                    <div className="containerBot__ContainerIconos">
                        <a href="pages/favoritos.html"><img src={imgFav} alt="Favoritos"/><p>Favoritos</p></a>
                        <div className="containerBot__ContainerIconos--btn">
                            <button type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal" id="btnAcceder">
                                <img src={imgUser} alt="Iniciar Sesion/Registrarte"/>
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
                                <div class="modal-body--button">
                                    <input type="button" value="INGRESAR" id="btnAceptar_LogIn" data-bs-dismiss="modal"/> 
                                </div>
                            </form>
                            
                        </div>
                        <div class="modal-footer" id="modalFooter">
                            <input type="button" value="Registrar nueva cuenta" className="backgroundRegistrarse" onClick="crearInterfazRegistro()"/>
                            <input type="button" value="Continuar con Facebook" className="backgroundFacebook" onClick="location.href='https://www.facebook.com/';" />
                            <input type="button" value="Continuar con Google +" className="backgroundGoogle" onClick="location.href='https://accounts.google.com/';"/>                
                        </div>
                    </div>
                </div>
            </div>
             
        </div>    
        
        

    );

}
export default NavBar;