import React, { Component } from 'react';

export default class Filter extends Component {
	constructor() {
		super();

		this.states = this.states.bind(this);
		this.rooms = this.rooms.bind(this);
		this.status = this.status.bind(this);
		this.types = this.types.bind(this);
	}

	componentDidMount() {
		console.log('-- locked and loaded --');
		this.props.populateFormAction();
	}

	states() {
		// if statement prevents erroring out undefined
		if (this.props.globalState.populateFormData.states !== undefined) {
			let { states } = this.props.globalState.populateFormData;
			// console.log(states);
			return states.map(item => {
				return (
					<option key={item} value={item}>
						{item}
					</option>
				);
			});
		}
	}

	rooms() {
		if (this.props.globalState.populateFormData.rooms !== undefined) {
			let { rooms } = this.props.globalState.populateFormData;
			return rooms.map(item => {
				return (
					<option key={item} value={item}>
						{item}BR+
					</option>
				);
			});
		}
	}

	status() {
		if (this.props.globalState.populateFormData.status !== undefined) {
			let { status } = this.props.globalState.populateFormData;
			return status.map(item => {
				return (
					<option key={item} value={item}>
						{item}
					</option>
				);
			});
		}
	}

	types() {
		if (this.props.globalState.populateFormData.types !== undefined) {
			let { types } = this.props.globalState.populateFormData;
			return types.map(item => {
				return (
					<option key={item} value={item}>
						{item}
					</option>
				);
			});
		}
	}

	render() {
		return (
			<section id="filter">
				<div className="insideFilter">
					<h2>FILTER</h2>
					<label htmlFor="location">location</label>
					<select
						name="location"
						className="filters location"
						onChange={this.props.onChange}
					>
						<option value="All">All</option>
						{this.states()}
					</select>
					<label htmlFor="rooms">rooms</label>
					<select
						name="rooms"
						className="filters rooms"
						onChange={this.props.onChange}
					>
						{this.rooms()}
					</select>
					<label htmlFor="status">status</label>
					<select
						name="status"
						className="filters status"
						onChange={this.props.onChange}
					>
						<option value="All">All</option>
						{this.status()}
					</select>
					<label htmlFor="type">type</label>
					<select
						name="type"
						className="filters type"
						onChange={this.props.onChange}
					>
						<option value="All">All</option>
						{this.types()}
					</select>
					<div className="filters price">
						<span className="title">price</span>
						<input
							type="text"
							name="min_price"
							className="min-price"
							onChange={this.props.onChange}
							value={this.props.globalState.min_price}
						/>
						<input
							type="text"
							name="max_price"
							className="max-price"
							onChange={this.props.onChange}
							value={this.props.globalState.max_price}
						/>
					</div>
					<div className="filters features">
						<span className="title">features</span>
						<label htmlFor="accessible">
							handicap-accessible
							<input
								type="checkbox"
								value="accessible"
								name="accessible"
								className="accessible"
								onChange={this.props.onChange}
							/>
						</label>
						<label htmlFor="pet-friendly">
							pet-friendly
							<input
								type="checkbox"
								value="pet_friendly"
								name="pet_friendly"
								className="pet-friendly"
								onChange={this.props.onChange}
							/>
						</label>
						<label htmlFor="parking">
							parking
							<input
								type="checkbox"
								value="parking"
								name="parking"
								className="parking"
								onChange={this.props.onChange}
							/>
						</label>
					</div>
				</div>
			</section>
		);
	}
}
