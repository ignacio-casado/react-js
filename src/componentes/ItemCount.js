

const ItemCount = (props) =>{

    <div className="contenedorProd">
        <div className="imgCss">
            <img src={props.image} alt="product"/>
        </div>
        <div className="nameProduct">
            <h3>
                {props.name}
            </h3>
            <h4>
                Stock: {props.stock}
            </h4>
            <p>
                Categoria: {props.positionID}
            </p>
            <button className="btnSumar">+</button>
            <button className="btnRestar">-</button>
        </div>
        
    </div>



}

export default ItemCount;