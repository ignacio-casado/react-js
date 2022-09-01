import { useState } from "react";
import Item from "./Item";
import Product from "../utils/Product";


const ItemCount = (props) =>{

    const [carrito, setcarrito] = useState(0)

    const carritoMas = () =>{
        setcarrito(carrito+1)
    }

    const carritoMenos = () =>{
        setcarrito(carrito-1)
    }

    return(
        <>
        
                    <div className="botonesC">
                     <button className="btnSumar" disabled={carrito >= props.stock} onClick={carritoMas}>+</button>
                        <button className="btnRestar" disabled={carrito < 1} onClick={carritoMenos}>-</button> 
                        <p className="carritoAdd"> Agregado al carrito: {carrito}</p>
                    </div>
                    
        </>
    );
}

export default ItemCount;