import ItemDetail from "./ItemDetail";
import Product from "../utils/Product";
import { useState, useEffect } from "react";
import promiseItem from "../utils/promiseItem";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () =>{
    const [producto, setProducto] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        if(id){
            promiseItem(Product.filter(item=> item.id == id) )
            .then(result => setProducto(result))
            .catch(err => console.log(err))
        }else{
            console.log("err")
            
        }
       
    },[id]);
    

    return(
        <>
       <ItemDetail item={producto}/>


        
        
        
        </>
    );

}
export default ItemDetailContainer;