import NavBar from "./componentes/NavBar";
import ItemListContainer from './componentes/ItemListContainer'
import './App.css';
import Product from "./componentes/Product";
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () =>{

  return(
    <>
      < NavBar />
      <ItemListContainer greeting="Hola bienvenidos a mi e-commerce"/>
      <Product />
    </>
  );
  
}

export default App;