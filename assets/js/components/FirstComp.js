import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Layout extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}
	clickedBtn = () => {};
	async test() {}
	render() {
		return <h1>hebwo</h1>;
	}
}

const app = document.getElementById('app');

ReactDOM.render(<Layout />, app);
