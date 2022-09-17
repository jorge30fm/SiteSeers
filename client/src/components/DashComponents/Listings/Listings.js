import React from "react";
import "./Listings.css";
import ListingCard from "../../ListingCard/ListingCard";

const Listings = () => {
  return (
    <div>
      <div>
        <h3 className="dash-listing-title">Active Listings</h3>
        <a className="wrapper-link" href="/reservation-details">
          <ListingCard />
        </a>
      </div>
      <div className="dash-border-top">
        <h3 className="dash-listing-title">Disabled Listings</h3>
        <p className="nothing-here">There's nothing here!</p>
      </div>
      <div className="btn-container padding">
        <a href="/add-listing">
        <button className="btn">Add Listing</button>
        </a>
      </div>
    </div>
  );
};
export default Listings;