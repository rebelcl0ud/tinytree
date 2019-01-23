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
					<select
						name="location"
						className="filters location"
						onChange={this.props.onChange}
					>
						<option value="Tennessee">Tennessee</option>
						<option value="Kentucky">Kentucky</option>
						<option value="Montana">Montana</option>
					</select>
					<select
						name="rooms"
						className="filters rooms"
						onChange={this.props.onChange}
					>
						<option value="0">0BR</option>
						<option value="1">1BR</option>
						<option value="2">2BR</option>
						<option value="3">3BR+</option>
					</select>
					<select
						name="status"
						className="filters status"
						onChange={this.props.onChange}
					>
						<option value="vacation">vacation</option>
						<option value="rent">rent</option>
						<option value="buy">buy</option>
					</select>
					<select
						name="type"
						className="filters type"
						onChange={this.props.onChange}
					>
						<option>treehouse</option>
						<option>tinyhouse</option>
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
