import React from "react";
import "./Listings.css";
import { Link } from "react-router-dom";
import ListingCard from "../../ListingCard/ListingCard";
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
						<button className="btn">Add Listing</button>
					</Link>
				</div>
			</div>
		);
	}
	return (
		<div>
			<div>
				<h3 className="dash-listing-title">Active Listings</h3>
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
			<div className="dash-border-top">
				<h3 className="dash-listing-title">Disabled Listings</h3>
				{listingsArray.map((listing) => {
					if (!listing.active) {
						return (
							<ListingCard key={listing._id} campsite={listing}>
								{listing.name}
							</ListingCard>
						);
					}
					// <ListingCard key={listing._id} campsite={listing}>
					//   {listing.name}
					// </ListingCard>
				})}
			</div>
			<div className="btn-container padding">
				<Link to="/add-listing">
					<button className="btn">Add Listing</button>
				</Link>
			</div>
		</div>
	);
};
export default Listings;
