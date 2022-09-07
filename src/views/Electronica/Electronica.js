import React, { useState, useEffect } from 'react';
import axios from 'axios';

// link router dom
import { Link } from 'react-router-dom';
import Item from '../../components/ItemListContainer/Item';


const Electronica = () => {
	const [users, setUsers] = useState([]);
	
	useEffect(() => {
		axios("https://fakestoreapi.com/products/category/electronics").then((res) =>
			setUsers(res.data)
		);
	}, []);

	return (
		<div className='CharacterList-container'>	
			
			{users.map((user) => {
				return (
                    
					<div key={user.id}>
                        <h1>Electronica</h1>
						<Link to={`/detail/${user.id}`} className='Link'>
							<Item data={user} />
						</Link>
					</div>
				);
			})}
		</div>
	);
};


export default Electronica;