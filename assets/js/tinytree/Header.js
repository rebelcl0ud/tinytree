import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Header extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<header>
				<div className="logo">tinytree</div>
				<nav>
					<a href="#">create listing</a>
					<a href="#">about us</a>
					<a href="#">log in</a>
					<a href="#" className="register-btn">
						register
					</a>
				</nav>
			</header>
		);
	}
}
