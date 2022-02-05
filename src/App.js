
import './App.css';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer texto="HOLA"/>
    <ItemCount/>
    </>
  );
}

export default App;
