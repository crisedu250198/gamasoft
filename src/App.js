
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import CartContextProvider from './components/CartContext';
import Home from './components/Home';
import ItemListFavContainer from './components/ItemListFavContainer';
import FinishCartContainer from './components/FinishCartContainer';
import FooterContainer from './components/FooterContainer';
function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/item/:idProd' element={<ItemDetailContainer/>}/>
        <Route path='/category' element={<ItemListContainer/>}/>
        <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/favorite' element={<ItemListFavContainer/>}/>
        <Route path='/finishCart' element={<FinishCartContainer/>}/>
      </Routes>
      <FooterContainer/>
    </BrowserRouter>
    </CartContextProvider>
    
  );
}

export default App;
