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
				console.log(advice);
			})
			.catch((error) => {
				console.log(error);
			});
	}	
	render() {
		 return (
			<h1> Hello </h1>
		 );
	}
}

export default App;