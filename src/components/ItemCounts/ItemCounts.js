
import React,{Component} from 'react';

let stock = 5;
class Contador extends Component {
	constructor() {
		super();

		this.state = {
			counter: 0
		};

	}

	handlerCounterUp = () => {
		if (this.state.counter < stock) {
			this.setState({ counter: this.state.counter + 1 });
		} else {
			alert("Sin Stock")
		};
		
	};
	handlerCounterDown = () => {
		if (this.state.counter > 0) {
			this.setState({ counter: this.state.counter - 1 });
		} 
	};

	render() {
		return ( 
				
				<div className='CounterSection'>
					<p>Stock Total {stock}</p>
					<p>Cantidad Seleccionada: {this.state.counter}</p>
					<div className='btn-section'>
						<button onClick={this.handlerCounterUp}>Agregar</button>
						<button onClick={this.handlerCounterDown}>Quitar</button>
					</div>
				</div>
			
		);
	}
} export default Contador;