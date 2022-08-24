import imagenes from "../assets/imagenes";

const CartWidget = (props) =>{
    return(
        <>
        <div>
            <img src={imagenes.img3} className="fotoCarrito" />
           
        </div>
        <div>
            <p className="contadorCarrito">
                {props.numero}
            </p>
        </div>
        
        </>
    );
}

export default CartWidget;