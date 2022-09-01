import Product from "../utils/Product";
import { useState, useEffect } from "react";
import promiseItem from "../utils/promiseItem";
import ItemCount from "./ItemCount";

const Item =() =>{

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
           
                    <div className="container text-center" />
                    <div className="col-md-4" />
                    <div className="row" >
                    <div className="imgCss">
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
                        <ItemCount />
                    </div>
                    </div>
                    <div className="row" >
                   
                        <div className="propiedadesProduct">
                        
                        <button className="vermasinformacion">Ver mas informacion</button>
                        </div>
                        
                    </div>
                    
                    
                </> 
            ))
            }
            
            </>
    )     
        
}

export default Item;