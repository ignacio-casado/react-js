import { useState } from "react";
import Item from "./Item";
import Product from "../utils/Product";
import { Link } from "react-router-dom";


const ItemCount = (props) =>{

    const [carrito, setcarrito] = useState(1)
    const [compraruno, setcompraruno] = useState(0)

    const carritoMas = () =>{
        setcarrito(carrito+1)
    }

    const carritoMenos = () =>{
        setcarrito(carrito-1)
    }


    const comprar = () =>{
        setcompraruno(compraruno)
    
    }
    return(
        <>
        
                    <div className="botonesC">
                     <button className="btnSumar" disabled={carrito >= props.stock} onClick={carritoMas}>+</button>
                     <Link to='/cart'><button className="buy" onAdd={comprar}>Comprar</button></Link>
                        <button className="btnRestar" disabled={carrito < 1} onClick={carritoMenos}>-</button> 
                        <p className="carritoAdd"> Agregado al carrito: {carrito}</p>
                    </div>
                    
        </>
    );
}

export default ItemCount;