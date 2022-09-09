import Product from "../utils/Product";
import ItemCount from "./ItemCount";
import promiseItem from "../utils/promiseItem";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetailContainer from "./ItemDetailContainer";

const ItemListContainer = ({item}) =>{
   const [producto, setProducto] = useState([]);
   const {id} = useParams();

    useEffect(()=>{
      if(id){
         promiseItem(500, Product.filter(item => item.categoryid == id))
         .then(result => setProducto(result))
         .catch(err => console.log(err))
      }else{
         promiseItem(500, Product)
         .then(result => setProducto(result))
         .catch(err => console.log(err))
      }
       
    },[id])
    
 return(
    <>
    <div>
     
      <ItemCount />
         {producto.map(item =>(
          <ItemCount 
          id={item.id}
          image={item.image}
          name={item.name}
          stock={item.stock}
          categoryID={item.categoryID}
          />
        )) 
        }  
      <ItemDetailContainer />
    </div>
    
    
    </>
 );
} 

export default ItemListContainer;