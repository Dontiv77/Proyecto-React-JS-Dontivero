import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../ItemListContainer/Itemlist.css'
import Item from './Item';
// link router dom
import { Link } from 'react-router-dom';


const ItemList = () => {
	const [users, setUsers] = useState([]);
	
	useEffect(() => {
		//https://fakestoreapi.com/products/categories
		axios('https://fakestoreapi.com/products').then((res) =>
			setUsers(res.data)
		);
	}, []);

	return (
		<div className='CharacterList-container'>	
			
			{users.map((user) => {
				return (
					<div key={user.id}>
						<Link to={`/detail/${user.id}`} className='Link'>
							<Item data={user} />
						</Link>
					</div>
				);
			})}
		</div>
	);
};


export default ItemList;

