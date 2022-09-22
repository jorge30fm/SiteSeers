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
  console.log("LISKTING INFO", listingsArray);
  if (loading) {
    return <p>Loading!</p>;
  }
  return (
    <div>
      {listingsArray.map((listing) => (
        <ListingCard key={listing._id} campsite={listing}>
          {listing.name}
        </ListingCard>
      ))}
      {/* <div>
        <h3 className="dash-listing-title">Active Listings</h3>
        <Link className="wrapper-link" to="/reservation-details">
          <ListingCard />
        </Link>
      </div>
      <div className="dash-border-top">
        <h3 className="dash-listing-title">Disabled Listings</h3>
        <p className="nothing-here">There's nothing here!</p>
      </div>
      <div className="btn-container padding">
        <Link to="/add-listing">
          <button className="btn">Add Listing</button>
        </Link>
      </div> */}
    </div>
  );
};
export default Listings;
