import React, { Component } from 'react';

export default class Listings extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<section className="listings">
				<section className="search-area">
					<input type="text" name="search" />
				</section>

				<section className="sort-area">
					<div>13 results found</div>
					<div className="sort-options">
						<select name="sortby" className="sortby">
							<option value="price-asc">Highest Price</option>
							<option value="price-dsc">Lowest Price</option>
						</select>
						<div className="view">
							<i className="fas fa-th-list" />
							<i className="fas fa-th" />
						</div>
					</div>
				</section>
				<section className="listings-results">
					<div className="listing">
						<div className="listing-img">
							<span className="location-name">location name</span>
							<div className="location-details">
								<div className="user-img">photo here</div>
								<div className="user-details">
									<span className="user-name">woo travels</span>
									<span className="date-posted">07/07/17</span>
								</div>
								<div className="listing-details">
									<div className="area">
										<i class="fas fa-ruler-combined" />
										<span>800ft&sup2;</span>
									</div>
									<div className="beds">
										<i className="fas fa-bed" />
										<span>sleeps 4</span>
									</div>
									<div className="furnished">
										<i className="fas fa-couch" />
										<span>fully furnished</span>
									</div>
								</div>
							</div>
						</div>
						<div className="listing-bottom">
							<span className="listing-rate">
								<i className="fas fa-dollar-sign" />
								rate/daily
							</span>
							<span className="listing-location">
								<i className="fas fa-map-marker-alt" />
								area | neighborhood
							</span>
						</div>
					</div>
				</section>
				<section className="pagination" />
			</section>
		);
	}
}
