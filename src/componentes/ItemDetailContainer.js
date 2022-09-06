import ItemDetail from "./ItemDetail";
import Product from "../utils/Product";
import { useState, useEffect } from "react";
import promiseItem from "../utils/promiseItem";

const ItemDetailContainer = () =>{
    const [producto, setProducto] = useState({});

    useEffect(()=>{
        promiseItem(Product[2], 2000 )
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