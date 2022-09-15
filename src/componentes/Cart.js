import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CartContex } from "./CartContext";

const Cart = () =>{

  const test = useContext(CartContex);
  
  useEffect(()=>{

  })

    return(
    <>
     {
      test.cartList.map(item=><p>{item.name}</p>)
     }
    
    
    </>
    );
}

export default Cart;