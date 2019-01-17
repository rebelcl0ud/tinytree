import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

class App extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div>
				<Header />
			</div>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);
