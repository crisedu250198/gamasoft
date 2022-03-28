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
                <img src= "https://firebasestorage.googleapis.com/v0/b/gamasoft-5d549.appspot.com/o/Banner2.jpg?alt=media&token=45e47b73-bfad-4d2f-b698-adb9871815b6"  className="d-block w-100" alt="Banner"/>
              </div>
              <div className="carousel-item">
                <img src="https://firebasestorage.googleapis.com/v0/b/gamasoft-5d549.appspot.com/o/Banner3.png?alt=media&token=f3c8f98c-fff6-4d86-ac84-be5211a810d7"  className="d-block w-100" alt="Banner2"/>
              </div>
              <div className="carousel-item">
                <img src="https://firebasestorage.googleapis.com/v0/b/gamasoft-5d549.appspot.com/o/Banner4.jpg?alt=media&token=4ac5b7d4-5458-4e3e-a2d7-db4c2506ff0c" className="d-block w-100" alt="Banner3"/>
              </div>
              <div className="carousel-item">
                <img src="https://firebasestorage.googleapis.com/v0/b/gamasoft-5d549.appspot.com/o/Banner5.jpg?alt=media&token=37378453-d817-4430-9750-97111c3824bd" className="d-block w-100" alt="Banner3"/>
              </div>
              <div className="carousel-item">
                <img src="https://firebasestorage.googleapis.com/v0/b/gamasoft-5d549.appspot.com/o/Banner6.jpg?alt=media&token=67eec657-62c4-4bb3-adc8-397c5b3c33f8" className="d-block w-100" alt="Banner3"/>
              </div>
              <div className="carousel-item">
                <img src="https://firebasestorage.googleapis.com/v0/b/gamasoft-5d549.appspot.com/o/Banner7.jpg?alt=media&token=4a31dd12-98f7-43a0-bb5d-7488d72f7402" className="d-block w-100" alt="Banner3"/>
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
                    <a href="#"><img src="https://firebasestorage.googleapis.com/v0/b/gamasoft-5d549.appspot.com/o/armapc.jpg?alt=media&token=e1d3fa37-0c0c-418a-b4e7-3d627af9020a" alt="Armar tu PC"/></a>
                </div>
                <h3>ARMA TU PC</h3>
            </article>
            <article className="">
                <div>
                    <a href="#"><img src="https://firebasestorage.googleapis.com/v0/b/gamasoft-5d549.appspot.com/o/basic.jpg?alt=media&token=d6d90474-4022-453a-8111-b8d3c45b59e6" alt="PC Basic Gamer"/></a> 
                </div>
                <h3>PC BASIC GAMER</h3>
            </article>
            <article className="">
                <div>
                    <a href="#"><img src="https://firebasestorage.googleapis.com/v0/b/gamasoft-5d549.appspot.com/o/elite.jpg?alt=media&token=16bdfffc-9ad4-4ca5-b184-ee0ebe0742d6" alt="PC Elite Gamer"/></a>   
                </div>
                <h3>PC ELITE GAMER</h3>
            </article>
            <article className="">
                <div>
                    <a href="#"><img src="https://firebasestorage.googleapis.com/v0/b/gamasoft-5d549.appspot.com/o/xtreme.jpg?alt=media&token=7bf6bf29-7f15-4d28-818a-e02c593e0eca" alt="PC Xtreme Gamer"/></a>
                </div>
                <h3>PC XTREME GAMER</h3>
            </article>
        </section>
    
        </>
    );
}
export default Home;