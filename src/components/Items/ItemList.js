import React, { useState, useEffect } from 'react';
import Item from './Item';

const DaniList = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		//fetch('https://api.github.com/users')
			fetch('https://fakestoreapi.com/products')
			.then((response) => response.json())
			.then((json) => setUsers(json));
	}, []);

	return (
		<div className='CuadroLista'>
			{users.map((user) => {
				return <Item key={user.id} data={user} />;
			})}
		</div>
	);
};

export default DaniList;