import React,{ useEffect, useState} from 'react';

const Contador = ({ initial, stock, onAdd}) => {

	const [count, setCount] = useState(initial)

	const agregar = ()=> {
		setCount (count + 1)
	}
	const quitar = ()=> {
		setCount (count - 1)
	} 
	useEffect (()=> {
		setCount(parseInt(initial))
	},[initial])

		return ( 
				
				<div className='CounterSection'>
					<p>Stock Total {stock}</p>
					<p>Cantidad Seleccionada: {count}</p>
					<div className='btn-section'>
						<button disabled={count>=stock} onClick={agregar}> + </button>
						<button disabled={count<=1} onClick={quitar}>-</button>
					</div>
					<button disabled={stock <=0}  onClick={()=>onAdd(count) }>Añadir al Carrito</button>
				</div>
			
		);

	};    
	export default Contador;