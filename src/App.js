
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import CartContextProvider from './components/CartContext';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/item/:idProd' element={<ItemDetailContainer/>}/>
        <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
    
  );
}

export default App;
