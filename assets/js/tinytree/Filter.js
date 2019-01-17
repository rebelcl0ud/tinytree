import React, { Component } from 'react';

export default class Filter extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<section id="filter">
				<div className="insideFilter">
					<h2>FILTER</h2>
					<select name="location" className="filters location">
						<option>Tennessee</option>
					</select>
					<select name="rooms" className="filters rooms">
						<option>2BR</option>
					</select>
					<select name="status" className="filters status">
						<option>Rent</option>
					</select>
					<select name="type" className="filters type">
						<option>treehouse</option>
						<option>tinyhouse</option>
					</select>
					<div className="filters price">
						<span className="title">price</span>
						<input type="text" name="min-price" className="min-price" />
						<input type="text" name="max-price" className="max-price" />
					</div>
					<div className="filters features">
						<span className="title">features</span>
						<label for="accessible">
							handicap-accessible
							<input
								type="checkbox"
								value="accessible"
								name="accessible"
								className="accessible"
							/>
						</label>
						<label for="pet-friendly">
							pet-friendly
							<input
								type="checkbox"
								value="pet-friendly"
								name="pet-friendly"
								className="pet-friendly"
							/>
						</label>
						<label for="parking">
							parking
							<input
								type="checkbox"
								value="parking"
								name="parking"
								className="parking"
							/>
						</label>
					</div>
				</div>
			</section>
		);
	}
}
