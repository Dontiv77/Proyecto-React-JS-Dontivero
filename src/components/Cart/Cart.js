import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../CartContext/CarContext';
import ItemCart from '../ItemCart/ItemCart';
import { addDoc, collection, getFirestore } from 'firebase/firestore';


export default function Cart() {
  
  const {cart, totalPrice} = useCartContext();

  const order = {
    buyer: {
        name: 'Exequiel',
        email: 'exequiel@gmail.com',
        phone: '123645988',
        address:'Rio Blanco 1000'
    },
    items: cart.map(product => ({ id: product.id, title: product.nombre, precio: product.precio, quantity: product.quantity})), 
    total: totalPrice(), 
  }


  const handleClick = () =>{
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order)
    .then(({ id }) => console.log(id))

  }

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
    <button onClick={handleClick}>Emitir Compra</button>
    </>
  )
}
