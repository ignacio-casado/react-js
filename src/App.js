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
      {
        Product.map(item =>(
          <ItemCount 
          id={item.id}
          image={item.image}
          name={item.name}
          stock={item.stock}
          categoryID={item.categoryID}
          />
        )) 

      }
      

    </>
  );
  
}

export default App;