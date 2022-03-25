const Home = ()=>{
    return(
        <>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src= {require('../images/Banner2.jpg')}  className="d-block w-100" alt="Banner"/>
              </div>
              <div className="carousel-item">
                <img src={require('../images/Banner3.png')}  className="d-block w-100" alt="Banner2"/>
              </div>
              <div className="carousel-item">
                <img src={require('../images/Banner4.jpg')} className="d-block w-100" alt="Banner3"/>
              </div>
              <div className="carousel-item">
                <img src={require('../images/Banner5.jpg')} className="d-block w-100" alt="Banner3"/>
              </div>
              <div className="carousel-item">
                <img src={require('../images/Banner6.jpg')} className="d-block w-100" alt="Banner3"/>
              </div>
              <div className="carousel-item">
                <img src={require('../images/Banner7.jpg')} className="d-block w-100" alt="Banner3"/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
        </div>
        
        <section className="containerBanners container">
            <article className="">
                <div>
                    <a href="pages/armar-pc.html"><img src={require('../images/armapc.jpg')} alt="Armar tu PC"/></a>
                </div>
                <h3>ARMA TU PC</h3>
            </article>
            <article className="">
                <div>
                    <a href="pages/encontra-Equipo.html"><img src={require('../images/basic.jpg')} alt="PC Basic Gamer"/></a> 
                </div>
                <h3>PC BASIC GAMER</h3>
            </article>
            <article className="">
                <div>
                    <a href="pages/encontra-Equipo.html"><img src={require('../images/elite.jpg')} alt="PC Elite Gamer"/></a>   
                </div>
                <h3>PC ELITE GAMER</h3>
            </article>
            <article className="">
                <div>
                    <a href="pages/encontra-Equipo.html"><img src={require('../images/xtreme.jpg')} alt="PC Xtreme Gamer"/></a>
                </div>
                <h3>PC XTREME GAMER</h3>
            </article>
        </section>
        
        <div className="containerSecciones container">
            <h2>PRODUCTOS DESTACADOS</h2>
            <div className="containerSecciones__content">
                <div className="btnCarrusel destacados">
                    <button alt="Anterior" id="btn-left-destacados" className="destacados"><img src={require('../images/flechaAnterior.png')} alt="Anterior" id="imgAnterior" /></button>
                </div>
                <div className="containerCarruselProd">
                    <div className="containerCarruselProd--List contenedorDestacados">
                       <div className="containerCarruselProd--List_Section sectionDestacados">
                        </div>
                        <div className="containerCarruselProd--List_Section sectionDestacados">
                        </div>
                        <div className="containerCarruselProd--List_Section sectionDestacados">
                        </div> 
                    </div>
                </div>
                <div className="btnCarrusel destacados">
                <button alt="Siguiente" id="btn-right-destacados" className="destacados"><img src={require('../images/flechaSiguiente.png')} alt="Siguiente" /></button>
                </div>
            </div>
        </div>
        <div className="containerSecciones container">
            <h2>NOVEDADES</h2>
            <div className="containerSecciones__content">
                <div className="btnCarrusel novedades">
                    <button alt="Anterior" id="btn-left-novedades" className="novedades"><img src={require('../images/flechaAnterior.png')} alt="Anterior"  /></button>
                </div>
                <div className="containerCarruselProd">
                    <div className="containerCarruselProd--List contenedorNovedades">
                        <div className="containerCarruselProd--List_Section sectionNovedades">
                        </div>
                        <div className="containerCarruselProd--List_Section sectionNovedades">
                        </div>
                        <div className="containerCarruselProd--List_Section sectionNovedades">
                        </div>
                    </div>
                </div>
                <div className="btnCarrusel novedades">
                    <button alt="Siguiente" id="btn-right-novedades" className="novedades"><img src={require('../images/flechaSiguiente.png')} alt="Siguiente" /></button>
                    </div>
            </div>
        </div>
        </>
    );
}
export default Home;