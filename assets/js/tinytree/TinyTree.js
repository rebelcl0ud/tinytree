import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Filter from './Filter';
import Listings from './Listings';
import listingsData from './data/listingsData';

class App extends Component {
	constructor() {
		super();
		this.state = {
			listingsData,
			min_price: 0,
			max_price: 0,
			accessible: false,
			pet_friendly: false,
			parking: false
		};

		this.onChange = this.onChange.bind(this);
	}

	onChange(event) {
		let name = event.target.name;
		// because there is diff event ie: checkbox, if/else statement
		let value =
			event.target.type === 'checkbox'
				? event.target.checked
				: event.target.value;

		this.setState(
			{
				[name]: value
			},
			() => {
				console.log(this.state);
			}
		);
		console.log(event.target.value);
	}

	render() {
		return (
			<div>
				<Header />
				<section id="content-area">
					<Filter onChange={this.onChange} globalState={this.state} />
					<Listings listingsData={this.state.listingsData} />
				</section>
			</div>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);
