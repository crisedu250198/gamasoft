const Item =(data)=>{
    return(
        <>
        <div key={data.id} className="containerCarruselProd--List_card">
            <img src={data.imagen} alt="Carrucel de imagenes"/>
            <h4>{data.descripcion}</h4>
            <div className="card__info-button">
                <div className="card__info">
                    <h5>Precio Web</h5>
                    <h6>$ {data.precio}.00</h6>
                </div>  

                <div>
                    
                    <button>Comprar</button>
                </div>  
            </div>  
        </div>
        </>
    );
}
export default Item;