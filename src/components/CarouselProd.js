const CarouselProd = ()=>{
    return(
        <>
        <div className="containerSecciones container">
            <h2>PRODUCTOS DESTACADOS</h2>
            <div className="containerSecciones__content">
                <div className="btnCarrusel destacados">
                    <button alt="Anterior" id="btn-left-destacados" className="destacados"><img src="https://firebasestorage.googleapis.com/v0/b/gamasoft-5d549.appspot.com/o/flechaAnterior.png?alt=media&token=8873f3d7-fb72-4079-8487-02f75ed89b30" alt="Anterior" id="imgAnterior" /></button>
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
                <button alt="Siguiente" id="btn-right-destacados" className="destacados"><img src="https://firebasestorage.googleapis.com/v0/b/gamasoft-5d549.appspot.com/o/flechaSiguiente.png?alt=media&token=d7803194-0b06-4b61-aa2a-0224884e535c" alt="Siguiente" /></button>
                </div>
            </div>
        </div>
        <div className="containerSecciones container">
            <h2>NOVEDADES</h2>
            <div className="containerSecciones__content">
                <div className="btnCarrusel novedades">
                    <button alt="Anterior" id="btn-left-novedades" className="novedades"><img src="https://firebasestorage.googleapis.com/v0/b/gamasoft-5d549.appspot.com/o/flechaAnterior.png?alt=media&token=8873f3d7-fb72-4079-8487-02f75ed89b30" alt="Anterior"  /></button>
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
                    <button alt="Siguiente" id="btn-right-novedades" className="novedades"><img src="https://firebasestorage.googleapis.com/v0/b/gamasoft-5d549.appspot.com/o/flechaSiguiente.png?alt=media&token=d7803194-0b06-4b61-aa2a-0224884e535c" alt="Siguiente" /></button>
                    </div>
            </div>
        </div>
         {/* Falta Termina */}
        </>
    );
}
export default CarouselProd; 