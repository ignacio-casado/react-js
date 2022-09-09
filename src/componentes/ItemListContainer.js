
import ItemCount from "./ItemCount";
import Item from "./Item";
import NavBar from "./NavBar";

const ItemListContainer = (props) =>{

 return(
    <>
    <div>
  
      <Item />
      <ItemCount />
     {/* {Product.map(item =>(
          <ItemCount 
          id={item.id}
          image={item.image}
          name={item.name}
          stock={item.stock}
          categoryID={item.categoryID}
          />
        )) 
        }  */}

    </div>
    
    
    </>
 );
} 

export default ItemListContainer;