import React, { useState } from 'react';
import './ItemDetailContainer.css';
import Contador from '../ItemCounts/ItemCounts';
import { useCartContext } from '../CartContext/CarContext';
import { Link } from 'react-router-dom';
import './ItemDetail.css';


const ItemDetail = ({ data }) => {

	const [goToCart, setGoToCart] = useState(false);
	const {addProduct} = useCartContext();
	const onAdd = (quantity)=>{
		setGoToCart (true)
		alert(`Añadiste ${quantity}`)
		addProduct(data, quantity)
	}

	return (
		
		<div className='CharacterList-detail'>
					<div>
						<h2>{data.title}</h2>
                        <img  src={data.image} alt='no foto' />
                        <p>{data.description} </p>
                        <p>Price: $ {data.price}</p>

						{goToCart?<Link to='/cart'>ir al Carrito</Link> :<Contador initial={1} stock={5} onAdd={onAdd} />}
					</div>
		</div> 
	); 
} ;

export default ItemDetail;