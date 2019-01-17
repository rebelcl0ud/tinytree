import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
	constructor() {
		super();
	}
	render() {
		return <h1>hebwo</h1>;
	}
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);
