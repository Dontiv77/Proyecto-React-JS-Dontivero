import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../ItemListContainer/Itemlist.css'
import Item from '../ItemListContainer/Item';
// link router dom
import { Link, useParams } from 'react-router-dom';



const CategoryList = () => {
	const [users, setUsers] = useState([]);

    const  { categoryid }  = useParams();
	
	useEffect(() => {
		//https://fakestoreapi.com/products/categories
		axios(`https://fakestoreapi.com/products/category/${categoryid}`).then((res) => 
			setUsers(res.data)
		);
	}, [categoryid]);

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


export default CategoryList;