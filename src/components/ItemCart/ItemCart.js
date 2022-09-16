import React from "react";
import { useCartContext } from "../CartContext/CarContext";
import './ItemCart.css';


const ItemCart = ({product}) => {

    const {removeProduct} = useCartContext();

    return(
        <div className="ItemCart">
        <div>
        <h2>{product.title}</h2>
        <img  src={product.image} alt='no foto' />
        <p>description: {product.description} </p>
        <p>Cantidad: {product.quantity}</p>
        <p>Price: $ {product.price}</p>
        <p>Subtotal: $ {product.quantity * product.price}</p>
        <button onClick={()=>removeProduct(product.id)}>Eliminar</button>
        </div>
        </div>
    )

}

export default ItemCart;