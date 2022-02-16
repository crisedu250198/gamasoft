
import './App.css';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <NavBar/>
    <ItemDetailContainer/>
    <ItemListContainer/>
    </>
  );
}

export default App;
