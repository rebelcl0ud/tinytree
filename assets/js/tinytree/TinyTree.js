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
			location: 'All',
			rooms: 0,
			status: 'All',
			type: 'All',
			listingsData,
			min_price: 0,
			max_price: 50000,
			accessible: false,
			pet_friendly: false,
			parking: false,
			filteredData: listingsData,
			populateFormData: ''
		};

		this.onChange = this.onChange.bind(this);
		this.filteredData = this.filteredData.bind(this);
		this.populateForm = this.populateForm.bind(this);
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
				// console.log(this.state);
				this.filteredData();
			}
		);
	}

	filteredData() {
		let newData = this.state.listingsData.filter(item => {
			return (
				item.price >= this.state.min_price &&
				item.price <= this.state.max_price &&
				item.rooms >= this.state.rooms
			);
		});

		// location; goes by state
		if (this.state.location !== 'All') {
			newData = newData.filter(item => {
				return item.state === this.state.location;
			});
		}

		// status; rent | buy | vacation
		if (this.state.status !== 'All') {
			newData = newData.filter(item => {
				return item.status === this.state.status;
			});
		}

		// type; tinyhouse or treehouse
		if (this.state.type !== 'All') {
			newData = newData.filter(item => {
				return item.type === this.state.type;
			});
		}

		this.setState({
			filteredData: newData
		});
	}

	populateForm() {
		// - - - state - - -
		let states = this.state.listingsData.map(item => {
			return item.state;
		});
		// this keeps unique finds, no repeats
		states = new Set(states);
		states = [...states];
		states = states.sort();

		// - - - rooms; # - - -
		let rooms = this.state.listingsData.map(item => {
			return item.rooms;
		});
		rooms = new Set(rooms);
		rooms = [...rooms];
		rooms = rooms.sort();

		// - - - status; rent | buy | vacation - - -
		let status = this.state.listingsData.map(item => {
			return item.status;
		});
		status = new Set(status);
		status = [...status];
		status = status.sort();

		// - - - type; tinyhouse or treehouse - - -
		let types = this.state.listingsData.map(item => {
			return item.type;
		});
		types = new Set(types);
		types = [...types];
		types = types.sort();

		this.setState(
			{
				populateFormData: {
					states,
					rooms,
					status,
					types
				}
			},
			() => {
				console.log(this.state);
			}
		);
	}

	render() {
		return (
			<div>
				<Header />
				<section id="content-area">
					<Filter
						onChange={this.onChange}
						globalState={this.state}
						populateFormAction={this.populateForm}
					/>
					<Listings listingsData={this.state.filteredData} />
				</section>
			</div>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);
