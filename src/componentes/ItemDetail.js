import ItemCount from "./ItemCount";
import Product from "../utils/Product";
import imagenes from "../assets/imagenes";
import { useState, useEffect } from "react";
import promiseItem from "../utils/promiseItem";

const ItemDetail = ({item}) =>{



    return(
        <>
            <div className="Row">
            
                <h3 className="nameDetail">{item.name}</h3>
                <img src={item.image} alt="imgDetail" />
                <h4 className="stockDetail">Stock: {item.stock}</h4>
                <p className="descriptionDetail">{item.description}</p>
                <p> Categoria: {item.positionID} </p>
               
                <h5 className="itemPriceDetail">${item.precio} usd</h5>
                {/* <button className="vermasinformacion">Ver mas informacion</button> */}
                <ItemCount />
                        
            
            </div>
           
        </>
        
    );    
}

export default ItemDetail;