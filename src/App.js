import NavBar from "./componentes/NavBar";
import ItemListContainer from './componentes/ItemListContainer'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemCount from "./componentes/ItemCount";
import Product from "./utils/Product";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import { BrowserRouter, Routes } from "react-router-dom";

const App = () =>{

  return(
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <route path="/" element={<ItemListContainer />}/>
      <route path="/category/:id" element={<ItemListContainer/>}/>
      <route path="/item/:id" element={<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter>
  );
  
}

export default App;