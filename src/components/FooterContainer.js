import { Link } from "react-router-dom";

const FooterContainer = () =>{
    return(
    <>
        <div className="containerBackground">
            <div className="containerFormSuscripcion container">
                <form action="https://formspree.io/f/xknkkdzp"
                method="POST">
                    <label for="">Recibí las mejores ofertas en tu e-mail</label>
                    <input type="text" name="Nombre" id="entrada_Nombre" placeholder="  Ingresa tu nombre" className="inputText"/>
                    <input type="email" name="_replyto" id="entrada_Email" placeholder="   Ingresa tu email" className="inputText"/>
                    <button>Suscribite</button>
                </form>
            </div>
        </div>
        <div className="footer__containerAyuda--Fondo">
            <section className="footer__containerAyuda row">
                <article className="col-4">
                    <h3>Información</h3>
                    <p> Realizá tu compra online y recibila en tu domicilio o retirá por nuestro local en Almagro
                        <br/>
                        Atención telefónica: (011) 7700-0348
                        <br/>
                        Whatsapp: +54 9 11-2391-4759</p>
                    <div className="footer__containerAyuda--Menu">
                        <h4>Menu</h4>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/" >Inicio</Link>
                                </li>
                                <li>
                                    <Link to="/category/">Tienda</Link>
                                </li>
                                <li>
                                    <Link to='/category/4'>Ofertas</Link>
                                </li>
                                <li>
                                    <a href="https://www.google.com/maps" target="_blank">Sucursales</a>
                                </li>
                            </ul>
                        </nav>
                    </div>    
                </article>
                <article className="col-4">
                    <h3 id="Nosotros">Nosotros</h3>
                    <p> En Gamasoft buscamos destacar por nuestro conocimiento e intentamos establecernos
                        como la opción ideal para sus compras de tecnología. 
                        Todos nuestros vendedores se encuentran altamente 
                        capacitados para asesorarlo y ofrecerle exactamente lo que necesita.</p>
                </article>
                <article className="col-4">
                    <h3>Contactos</h3>
                    <p> E-mail: ventas@gamasoft.com.ar
                        <br/>
                        Teléfono: (011) 7700-0348
                        <br/>
                        Whatsapp: +54 9 11-2391-4759
                        <br/>
                        Atención Online: Lunes a viernes de 09 a 18 hs. Sábados de 10 a 13 hs.
                        <br/>
                        Retiro de Pedidos: Lunes a viernes de 10 a 17 hs. Sábados de 10 a 12:30 hs.
                        <br/>
                        Soporte: rma@gamasoft.com.ar</p>
                        <br/>
                    <nav className="footer__Redes">
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/" target="_blank" ><img src= "https://firebasestorage.googleapis.com/v0/b/gamasoft-5d549.appspot.com/o/facebook.png?alt=media&token=5f615edb-7369-45e9-8089-7a2b488f926d" alt="Icono de Facebook"/></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/"target="_blank"><img src="https://firebasestorage.googleapis.com/v0/b/gamasoft-5d549.appspot.com/o/instagramColor.png?alt=media&token=80fdbdea-39f4-45b0-86bc-4e301230a922" alt="Icono de instagram"/></a>
                            </li>
                            <li>
                                <a href="https://web.whatsapp.com/" target="_blank"><img src="https://firebasestorage.googleapis.com/v0/b/gamasoft-5d549.appspot.com/o/whatsappColor.png?alt=media&token=313f368e-d21c-4e78-a7e4-2905f95486ab" alt="Icono de Whatsapp"/></a>
                            </li>
                        </ul>
                    </nav>
                </article>
            </section>
        </div>
        
    </>);
}
export default FooterContainer;