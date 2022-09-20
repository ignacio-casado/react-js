import { useEffect, useState } from "react";
import Item from "./Item";
import Product from "../utils/Product";
import { Link } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemCount = ({stock =0, initial = 1, onAdd}) =>{

   
    const [count, setCount] = useState(0)
    useEffect(()=>{
        setCount(initial);
    })
    
    const increment =  () =>{
        if (count < stock){
            setCount(count + 1);
        }
    }

    const decrement = () =>{
        if(count > initial + 1){
            setCount(count - 1);
        }
    }
    console.log(increment)
    console.log(decrement)
    return(
        <>
        
                    <div className="botonesC">
                     <button className="btnSumar" /* disabled={carrito >= props.stock} */ onClick={increment}>+</button>
                     <Link to='/cart'><button className="buy" onClick={()=>onAdd(count)}>Agregar al carrito</button></Link>
                        <button className="btnRestar" /* disabled={carrito < 1} */ onClick={decrement}>-</button> 
                       <p className="carritoAdd"> Agregado al carrito: {count}</p>
                        
                    </div>
                    
        </>
    );
}

export default ItemCount;