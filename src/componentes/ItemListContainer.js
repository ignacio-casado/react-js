import Product from "../utils/Product";
import ItemCount from "./ItemCount";

const ItemListContainer = (props) =>{

 return(
    <>
    <div>
    {Product.map(item =>(
          <ItemCount 
          id={item.id}
          image={item.image}
          name={item.name}
          stock={item.stock}
          categoryID={item.categoryID}
          />
        )) 
        }

    </div>
    
    
    </>
 );
} 

export default ItemListContainer;