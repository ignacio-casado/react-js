import ItemCount from "./ItemCount";
import Product from "../utils/Product";
import imagenes from "../assets/imagenes";
import { useState, useEffect } from "react";
import promiseItem from "../utils/promiseItem";

const ItemDetail = ({item}) =>{



    return(
        <>
        {
            
            
               
                        {item.image} 
                        
                       
                         {item.name}
                       
                        
                        
                            Stock: {item.stock}
                     
                       
                            Categoria: {item.positionID} 
                           
                       
                    
                        <button className="vermasinformacion">Ver mas informacion</button>
                        <ItemCount />
                        
                
                    
                    
            
        }
        </>
        
    );    
}

export default ItemDetail;