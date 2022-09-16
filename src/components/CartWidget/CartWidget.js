import React from "react"
import { useCartContext } from "../CartContext/CarContext";
export const CartWidget = () =>{

    const{totalProducts} = useCartContext();

    return (
        <>
        <i  className="bi bi-cart4"></i>
        <span>{totalProducts() || '' }</span>
        </>
    );
}

export default CartWidget; 