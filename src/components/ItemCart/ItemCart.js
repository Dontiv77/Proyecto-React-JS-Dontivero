import React from "react";
import { useCartContext } from "../CartContext/CarContext";
import './ItemCart.css';


const ItemCart = ({product}) => {

    const {removeProduct} = useCartContext();

    return(
        <div className="ItemCart">
        <div>
        <h2>{product.nombre}</h2>
        <img  src={product.imagen} alt='no foto' />
        <p>description: {product.descripcion} </p>
        <p>Cantidad: {product.quantity}</p>
        <p>Price: $ {product.precio}</p>
        <p>Subtotal: $ {product.quantity * product.precio}</p>
        <button onClick={()=>removeProduct(product.id)}>Eliminar</button>
        </div>
        </div>
    )

}

export default ItemCart;