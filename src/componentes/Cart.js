import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CartContex } from "./CartContext";

import { doc, collection, serverTimestamp, setDoc, updateDoc, increment } from "firebase/firestore";
import {db} from "../utils/FireBaseConfig"

const Cart = () =>{

  const calcTotal = () =>{

  }

  const test = useContext(CartContex);
  const createOrder =()=>{
    let itemForDB = test.cartList.map(item=>({
      id: item.id,
      title: item.name,
      price: item.precio,
      qty: item.qty
    }))
    let order={
      buyer:{
        name: "leo messi",
        email: "leo@messi.com",
        phone: "0923423"
      },
      date: serverTimestamp(),
      items:  itemForDB,
      total: test.calcTotal()
    } 

    console.log(createOrder)
    const createOrderInFireStore = async ()=>{
      const newOrderRef = doc(collection(db, "orders"))
      await setDoc(newOrderRef, order)
      return newOrderRef;
    }
    createOrderInFireStore()
      .then(result => {
        alert("your order has been taken " + result.id)
        test.cartList.forEach(async(item) =>{
          const itemRef = doc(db, "products", item.idItem);
          await updateDoc(itemRef,{
            stock: increment(-item.qtyItem)
            
          });
        })
        test.removeItem()
      })
      
      .catch(err=> console.log(err))
  }

    
    return(
    <>
     {
        test.cartList.map(item=><li className="carritoCompra">{item.name} {/* (={item.qty})  */}<img src={item.image} alt="miniatura"/> <button className="btnEliminar" onClick={()=>test.removeItem(item.id)}>ELIMINAR</button><h4 className="preciocarr">{item.precio} usd</h4></li>)
     }
     {/* <h3>Total = {totalCompra}</h3> */}
      <button className="btnPagar" onClick={createOrder}>Pagar</button>
      <Link to='/'><button className="continue">Seguir comprando</button></Link>
    
    </>
    );
}
  


export default Cart;