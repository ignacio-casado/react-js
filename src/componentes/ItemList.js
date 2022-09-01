import { useEffect, useState } from "react";
import promiseItem from "../utils/promiseItem";
import Product from "../utils/Product";

const ItemList = () =>{
    const [producto, setproducto] = useState([]);

        useEffect(()=>{
            promiseItem(Product)
                .then(result => setproducto(result))
                .catch(err => console.log(err))
        },[])

        return(
            <>
            {
    
                producto.map(Item => (
                    <>
               
                      
                            <img src={Item.image} alt="product" className="imgProduct"/>
                   
                            <h3>
                                {Item.name}
                            </h3>
                            <h4>
                                Stock: {Item.stock}
                            </h4>
                            <h5>
                                Categoria: {Item.positionID} 
                               
                            </h5>
                            
                           
                            
                      
                        
                    </> 
                ))
                }
                
                </>
        )     
}

export default ItemList;