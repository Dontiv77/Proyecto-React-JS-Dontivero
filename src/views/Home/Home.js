import React from 'react';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
import Title from "../../components/Title/Title";

const Home = () => {
    

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column',
				alignItems: 'center',
				padding: '25px',
			}}
		>
		<h1>
        <Title greeting="Feria Van Dame" />
        </h1>
			<ItemListContainer />
		</div>
	);
};

export default Home;
