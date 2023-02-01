import React from 'react';
import axios from 'axios';
import { Icon } from '@iconify/react';

import './App.css';

class App extends React.Component {
	state = { advice: '',}

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
		 return (
			<div className ="app">
				<div className="card">
					<h1 className ="heading">{this.state.advice}</h1>
					<div>
						<button className="button" onClick={this.grabQuote}>
							<span>Generate Quote</span>
						</button>
						<a href="https://www.linkedin.com/in/ryangormican/">
							<Icon icon="mdi:linkedin" color="#0e76a8" width="40" />
						</a>
						<a href="https://github.com/RyanGormican/Quoted">
							<Icon icon="mdi:github" color="white" width="40" />
						</a>
					</div>
				</div>
			</div>
		 );
	}
}

export default App;