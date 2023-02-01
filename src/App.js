import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {
	state = { quote: '' };

	componentDidMount() {
		console.log('Test');
	}
	render() {
		 return (
			<h1> Hello </h1>
		 );
	}
}

export default App;