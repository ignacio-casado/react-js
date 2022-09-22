import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CartContex } from "./CartContext";

const Cart = () =>{

  const test = useContext(CartContex);
  

    return(
    <>
     {
        test.cartList.map(item=><li className="carritoCompra">{item.name} (qty={item.qty}) <img src={item.image} alt="miniatura"/> <button className="btnEliminar" onClick={()=>test.removeItem(item.id)}>ELIMINAR</button><h4 className="preciocarr">{item.precio} usd</h4></li>)
     }
     <h3>Total =</h3>
      <button className="btnPagar">Pagar</button>
      <Link to='/'><button className="continue">Seguir comprando</button></Link>
    
    </>
    );
}

export default Cart;