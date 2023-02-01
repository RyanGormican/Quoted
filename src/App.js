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
			<h1> {quote}  </h1>
		 );
	}
}

export default App;