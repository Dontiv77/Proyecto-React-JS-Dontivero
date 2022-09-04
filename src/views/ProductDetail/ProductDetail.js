import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductDetail.css';
import { useParams } from 'react-router'; 
import Item from '../../components/ItemListContainer/Item';


const ProductDetail = () => {

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
					<div>
						<Item data={user} />
					</div>
		</div> 
	); 
} ;

export default ProductDetail;