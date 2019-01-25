import React, { Component } from 'react';

export default class Listings extends Component {
	constructor() {
		super();

		this.loopListings = this.loopListings.bind(this);
	}

	loopListings() {
		const { listingsData } = this.props;

		if (listingsData == undefined || listingsData.length == 0) {
			return 'Sorry, no matches found.';
		}

		return listingsData.map((listing, index) => {
			// - - - grid view - - -
			if (this.props.globalState.view === 'grid') {
				return (
					<div className="listing-col" key={index}>
						<div className="listing">
							<div
								className="listing-img"
								style={{
									background: `url("${listing.image}") no-repeat center center`
								}}
							>
								<span className="location-name">{listing.address}</span>
								<div className="location-details">
									<div className="user-img" />
									<div className="user-details">
										<span className="user-name">woo travels</span>
										<span className="date-posted">07/07/17</span>
									</div>
									<div className="listing-details">
										<div className="area">
											<i className="fas fa-ruler-combined" />
											<span>{listing.area} ft&sup2;</span>
										</div>
										<div className="beds">
											<i className="fas fa-bed" />
											<span>{listing.rooms} BR</span>
										</div>
										<div className="furnished">
											<i className="fas fa-couch" />
											<span>fully furnished</span>
										</div>
									</div>

									<div className="view-btn">view listing</div>
								</div>
							</div>
							<div className="listing-bottom">
								<span className="listing-rate">
									<i className="fas fa-dollar-sign" />
									{listing.price}
								</span>
								<span className="listing-location">
									<i className="fas fa-map-marker-alt" />
									{listing.city}, {listing.state}
								</span>
							</div>
						</div>
					</div>
				);
			} else {
				// - - - inline view - - -
				return (
					<div className="listing-col-full" key={index}>
						<div className="listing">
							<div
								className="listing-img"
								style={{
									background: `url("${listing.image}") no-repeat center center`
								}}
							>
								<span className="location-name">{listing.address}</span>
								<div className="location-details">
									<div className="user-img" />
									<div className="user-details">
										<span className="user-name">woo travels</span>
										<span className="date-posted">07/07/17</span>
									</div>
									<div className="listing-details">
										<div className="area">
											<i className="fas fa-ruler-combined" />
											<span>{listing.area} ft&sup2;</span>
										</div>
										<div className="beds">
											<i className="fas fa-bed" />
											<span>{listing.rooms} BR</span>
										</div>
										<div className="furnished">
											<i className="fas fa-couch" />
											<span>fully furnished</span>
										</div>
									</div>

									<div className="view-btn">view listing</div>
								</div>
							</div>
							<div className="listing-bottom">
								<span className="listing-rate">
									<i className="fas fa-dollar-sign" />
									{listing.price}
								</span>
								<span className="listing-location">
									<i className="fas fa-map-marker-alt" />
									{listing.city}, {listing.state}
								</span>
							</div>
						</div>
					</div>
				);
			}
		});
	}

	render() {
		return (
			<section id="listings">
				<section className="search-area">
					<input type="text" name="search" placeholder="search listings" />
				</section>

				<section className="sort-area">
					<div className="results">13 results found</div>
					<div className="sort-options">
						<select
							name="sortby"
							className="sortby"
							onChange={this.props.onChange}
						>
							<option name="price_dsc" value="price_asc">
								Lowest Price
							</option>
							<option name="price_asc" value="price_dsc">
								Highest Price
							</option>
						</select>
						<div className="view">
							<i
								className="fas fa-th"
								onClick={e => {
									e.preventDefault();
									this.props.onChangeView('grid');
								}}
							/>
							<i
								className="fas fa-th-list"
								onClick={e => {
									e.preventDefault();
									this.props.onChangeView('list');
								}}
							/>
						</div>
					</div>
				</section>

				<section className="listings-results">{this.loopListings()}</section>

				<section className="pagination">
					<ul className="pagination-num">
						<li>prev</li>
						<li className="active">1</li>
						<li>2</li>
						<li>3</li>
						<li>4</li>
						<li>5</li>
						<li>next</li>
					</ul>
				</section>
			</section>
		);
	}
}
