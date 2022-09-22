import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import '../ItemListContainer/Itemlist.css';
import { useParams } from 'react-router-dom';
import Item from './Item';
// link router dom
import { Link } from 'react-router-dom';


const ItemList = () => {
	const [users, setUsers] = useState([]);
	
	const { categoriaId } = useParams();

	useEffect(() => {
		
		const querydb = getFirestore();
		const queryCollection = collection(querydb, "productos");

		if (categoriaId) {
			const queryFilter = query(queryCollection, where("categoria", "==", categoriaId))
			getDocs(queryFilter)
			.then(res => setUsers(res.docs.map(product => ({ id: product.id, ...product.data() }))))
		}else{
			getDocs(queryCollection)
			.then(res => setUsers(res.docs.map(product => ({ id: product.id, ...product.data() }))))
		}
}, [categoriaId]);

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

