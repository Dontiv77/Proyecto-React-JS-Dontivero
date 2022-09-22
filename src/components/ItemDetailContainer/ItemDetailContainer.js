import React, { useState, useEffect } from 'react';
import './ItemDetailContainer.css';
import { useParams } from 'react-router'; 
import ItemDetail from './ItemDetail';
import { getFirestore, doc, getDoc} from "firebase/firestore";

const ItemDetailContainer = () => {

	const [user, setUser] = useState([]);

	let { id } = useParams();

		useEffect(() => {
			const querydb = getFirestore();
			const queryDoc = doc(querydb,"productos", id)
			getDoc(queryDoc)
			.then(res=> setUser({id: res.id,...res.data()}))
	}, [id]);
	
	return (
		
		<div className='CharacterList-detail'>
					<ItemDetail data={user} />
		</div> 
	); 
} ;

export default ItemDetailContainer;