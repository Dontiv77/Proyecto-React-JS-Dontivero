import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ItemDetailContainer.css';
import { useParams } from 'react-router'; 
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

	const [user, setUser] = useState([]);

	let { id } = useParams();

	useEffect(() => {
		axios(`https://fakestoreapi.com/products/${id}`).then((res) =>
		setUser(res.data)
		
		); 
	}, [id]); 


    Object.keys(user)
	
	return (
		
		<div className='CharacterList-detail'>
					<ItemDetail data={user} />
		</div> 
	); 
} ;

export default ItemDetailContainer;