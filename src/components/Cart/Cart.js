import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../CartContext/CarContext';
import ItemCart from '../ItemCart/ItemCart';


export default function Cart() {
  
  const {cart, totalPrice} = useCartContext();

  if(cart.length === 0) {
    return (
    <>
    <p>No hay elementos en tu carrito</p>
    <Link to='/'>Hacer compra</Link>
    </>
    )

  }
  return (
    <>
    <div className='Carrito'>
    {
      cart.map(product => <ItemCart key={product.id} product={product} />)
    }  
    </div>
    <h1> total: $ {totalPrice()} </h1>
    </>
  )
}
