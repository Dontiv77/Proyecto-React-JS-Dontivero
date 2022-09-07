import React, { useState, useEffect } from 'react';
import axios from 'axios';

// link router dom
import { Link } from 'react-router-dom';
import Item from '../../components/ItemListContainer/Item';


const Hombre = () => {
	const [users, setUsers] = useState([]);
	
	useEffect(() => {
		axios("https://fakestoreapi.com/products/category/men's clothing").then((res) =>
			setUsers(res.data)
		);
	}, []);

	return (
		<div className='CharacterList-container'>	
			{users.map((user) => {
				return (
                    
					<div key={user.id}>
                        <h1>Hombre</h1>
						<Link to={`/detail/${user.id}`} className='Link'>
							<Item data={user} />
						</Link>
					</div>
				);
			})}
		</div>
	);
};


export default Hombre;