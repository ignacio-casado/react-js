import NavBar from "./componentes/NavBar";
import ItemListContainer from './componentes/ItemListContainer'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemCount from "./componentes/ItemCount";
import Product from "./utils/Product";

const App = () =>{

  return(
    <>
      < NavBar />
      <ItemListContainer/>
      
      

    </>
  );
  
}

export default App;