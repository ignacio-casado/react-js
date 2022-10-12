
import Product from "../utils/Product";
import imagenes from "../assets/imagenes";
import { useState, useEffect, useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContex } from "./CartContext";
/* import { firebaseDos } from "../utils/FireBaseConfig"; */
/*  import { useContext } from "react";  */

const ItemDetail = ({item}) =>{

    const [itemCount, setItemCount] = useState(0)
/*     const [uni, setUni] = useState({}) */
    const test = useContext(CartContex);
    
    const onAdd = (qty)=>{
        setItemCount(qty);
        test.addItem(item);
    }

   /*  useEffect(()=>{
        firebaseDos()
            .then(result=> setUni(result))
    },[uni]) */

    return(
        <>
        
           
            
                <div className="Row">
                <div className="add">
                <h3 className="nameDetail">{item.name}</h3>
                    <img src={item.image} alt="imgDetail" />
                    <h4 className="stockDetail">Stock: {item.stock}</h4>
                    <p className="descriptionDetail">{item.description}</p>
                    <p> Categoria: {item.positionID} </p>
                   
                    <h5 className="itemPriceDetail">${item.precio} usd</h5>
                    {/* <button className="vermasinformacion">Ver mas informacion</button> */}
                    {/* {
                        ItemCount === 0
                        ? <ItemCount stock={item.stock} initial={ItemCount} onAdd={onAdd}/>
                        : <Link to='/cart'><button>BUY</button></Link>
                    } */}
    
                     <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                
                </div>
                   
                </div>
                
           
           
        </>
            
   
        
    );    
}

export default ItemDetail;