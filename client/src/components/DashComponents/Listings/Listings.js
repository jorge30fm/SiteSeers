import React from "react";
import "./Listings.css";
import { Link } from "react-router-dom";
import ListingCard from "../../ListingCard/ListingCard.js";
import { useQuery } from "@apollo/client";
import { QUERY_USER_LISTINGS_BASIC } from "../../../utils/queries.js";

const Listings = () => {
	const { loading, data } = useQuery(QUERY_USER_LISTINGS_BASIC);
	const listingInfo = data?.me || [];
	const listingsArray = listingInfo.campsiteListings;

	if (loading) {
		return <p>Loading!</p>;
	}
	if (!listingsArray.length) {
		return (
			<div>
				<p className="nothing-here">There's nothing here!</p>
				<div className="btn-container padding">
					<Link to="/add-listing">
						<button className="btn btn-long">Add Listing</button>
					</Link>
				</div>
			</div>
		);
	}
	return (
		<div>
			<div className="flex-row">
				<h3 className="dash-listing-title col-12">Active Listings</h3>
				{listingsArray.map((listing) => {
					if (listing.active) {
						return (
							<ListingCard key={listing._id} campsite={listing}>
								{listing.name}
							</ListingCard>
						);
					}
				})}
			</div>
			<div className="dash-border-top margin-top flex-row">
				<h3 className="dash-listing-title margin-top col-12">Disabled Listings</h3>
				{listingsArray.map((listing) => {
					if (!listing.active) {
						return (
							<ListingCard key={listing._id} campsite={listing}>
								{listing.name}
							</ListingCard>
						);
					}
				})}
			</div>
			<div className="btn-container padding">
				<Link to="/add-listing">
					<button className="btn btn-long">Add Listing</button>
				</Link>
			</div>
		</div>
	);
};
export default Listings;
