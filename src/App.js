import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {
	state = { quote: '' };

	componentDidMount() {
		this.grabQuote();
	}

	grabQuote = () => {
		axios.get('https://api.adviceslip.com/adivce');
			.then((response) => {
				const { advice } = response.data.slip
				
				this.setState({quote: advice});
			})
			.catch((error) => {
				console.log(error);
			});
	}	
	render() {
		const {quote} = this.state;

		 return (
			<div className ="app">
				<div className="card">
					<h1 className ="heading">{quote}</h1>
					<button className="button">
						<span>Generate Quote</span>
					</button>
				</div>
			</div>
		 );
	}
}

export default App;