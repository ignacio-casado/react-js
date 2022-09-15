import NavBar from "./componentes/NavBar";
import ItemListContainer from './componentes/ItemListContainer'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./componentes/Cart";
import  CartContexProvider  from "./componentes/CartContext";


const App = () =>{

  return(
    <CartContexProvider>
    <BrowserRouter>
    <NavBar/> 
    <Routes>
      <Route path="/" element={<ItemListContainer />}/>
      <Route path="/category/:id" element={<ItemListContainer/>}/> 
      <Route path="/item/:id" element={<ItemDetailContainer/>}/> 
      <Route path="/cart" element={<Cart />}/>{/* hacer */}
    </Routes>
    </BrowserRouter>
    </CartContexProvider>
  );
  
}

export default App;