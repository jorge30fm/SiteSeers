import React from "react";
import "./Listings.css";
import { Link } from "react-router-dom";
import ListingCard from "../../ListingCard/ListingCard";

const Listings = () => {
  return (
    <div>
      <div>
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
      </div>
    </div>
  );
};
export default Listings;
