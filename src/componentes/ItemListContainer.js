
import ItemCount from "./ItemCount";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Item from "./Item";


import { firebaseFetch } from "../utils/FireBaseConfig"

const ItemListContainer = () =>{
   const [producto, setProducto] = useState([]);
   const {idcategory} = useParams();

    useEffect(()=>{
      
      firebaseFetch(idcategory)
        .then(result => setProducto(result))

    },[producto])
    
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