import Product from "../utils/Product";
import ItemCount from "./ItemCount";
import promiseItem from "../utils/promiseItem";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Item from "./Item";
import ItemDetail from "./ItemDetail";

const ItemListContainer = () =>{
   const [producto, setProducto] = useState([]);
   const {id} = useParams();

    useEffect(()=>{
      if(id){
         promiseItem( Product.filter(item => item.categoryid == id))
         .then(result => setProducto(result))
         .catch(err => console.log(err))
      }else{
         promiseItem(Product)
         .then(result => setProducto(result))
         .catch(err => console.log(err))
      }
       
    },[id])
    console.log(producto)
    
 return(
    <>
    <div>
  
      
      {
         producto.map(item =>(
          <Item 
            item={item}
          />
          
        )) 
      }   
      
      {/* { producto.map(item =>(
            <ItemDetail 
              item={item}
            />
            
          )) 
      } 
          */}
      {/* <ItemDetailContainer /> */}
    </div>
    
    
    </>
 );
} 

export default ItemListContainer;