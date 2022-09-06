import ItemDetail from "./ItemDetail";
import Product from "../utils/Product";
import { useState, useEffect } from "react";
import promiseItem from "../utils/promiseItem";

const ItemDetailContainer = () =>{
    const [producto, setProducto] = useState({});

    useEffect(()=>{
        promiseItem(2000, Product[2])
            .then(result => setProducto(result))
            .catch(err => console.log(err))
    },[])

    return(
        <>
       <ItemDetail item={producto}/>


        
        
        
        </>
    );

}
export default ItemDetailContainer;