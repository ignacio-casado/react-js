import { useState } from "react";
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
    <div className="container text-center" >
  <div className="row">
    <div className="col" >
    <div className="imgCss">
        <img src={props.image} alt="product" className="imgProduct"/>
    </div>
    </div>
    <div className="col" >
        <div className="propiedadesProduct">
        <h3>
            {props.name}
        </h3>
        <h4>
            Stock: {props.stock}
        </h4>
        <p>
            {/* Categoria: {props.positionID} */}
            Agregado al carrito: {carrito} 
        </p>
        </div>
       
    </div>
    <div className="col" >
    <div className="botonesC">
    <button className="btnSumar" disabled={carrito >= props.stock} onClick={carritoMas}>+</button>
        <button className="btnRestar" disabled={carrito < 1} onClick={carritoMenos}>-</button>
    </div>
    </div>
    
  </div>
</div>
   
    

    </>
    

);
    

}

export default ItemCount;