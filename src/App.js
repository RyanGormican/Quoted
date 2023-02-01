import React from 'react';
import axios from 'axios';
import { Icon } from '@iconify/react';

import './App.css';

class App extends React.Component {
	state = { advice: '', }

	componentDidMount() {
		this.grabQuote();
	}

	grabQuote = () => {
		axios.get('https://api.adviceslip.com/adivce')
			.then((response) => {
				const { advice } = response.data.slip
				
				this.setState({ advice });
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
					<button className="button" onClick={this.grabQuote}>
						<a href="https://github.com/RyanGormican/Quoted">
							<Icon icon="mdi:github" color="white" width="40" />
						</a>
						<span>Generate Quote</span>
						<a href="https://github.com/RyanGormican/Quoted">
							<Icon icon="mdi:github" color="white" width="40" />
						</a>
					</button>
					<div>
						
						
					</div>
				</div>
			</div>
		 );
	}
}

export default App;