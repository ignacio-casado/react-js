import Product from "../utils/Product";
import { useState, useEffect } from "react";
import promiseItem from "../utils/promiseItem";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const Item =({item}) =>{


     return(
        <>
      
               
            
                      
                      <div className="contain">
                       <div>
                        <img src={item.image} alt="foto" className="imgProduct"/>
                        </div>
                            
                            <h3 className="nameItem">{item.name}</h3>
                        
                        
                          <p> Stock: {item.stock}</p> 
                     
                       
                            <p>Categoria: {item.positionID} </p>
                           
                       
                    
                        <Link to={`/item/${item.id}`}><button className="vermasinformacion">Ver mas informacion</button></Link>
                        
                       </div>
                       
                    
                     
                       
            
        </>
        
    ) ;   
        
}

export default Item; 