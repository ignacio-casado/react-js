import { Children, createContext, useState } from "react";
import Item from "./Item";

 export const CartContex = createContext();

 const CartContexProvider = ({children}) =>{

    const [cartList, setCartList] = useState([]);
    const addItem = (item) =>{
        setCartList([item])

    }

    return(<>
        <CartContex.Provider value={{cartList, addItem}}>
            {children}
        </CartContex.Provider>
    </>);
 }
 export default CartContexProvider; 