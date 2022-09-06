import NavBar from "./componentes/NavBar";
import ItemListContainer from './componentes/ItemListContainer'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemCount from "./componentes/ItemCount";
import Product from "./utils/Product";
import ItemDetailContainer from "./componentes/ItemDetailContainer";

const App = () =>{

  return(
    <>
      < NavBar />
      {/* <ItemListContainer/> */}
      <ItemDetailContainer />
      

    </>
  );
  
}

export default App;