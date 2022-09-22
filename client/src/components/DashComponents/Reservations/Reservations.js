import React from "react";
import "./Reservations.css";
import { Link } from "react-router-dom";
import ListingCard from "../../ListingCard/ListingCard";
import { useQuery } from "@apollo/client";
import { QUERY_USER_RESERVATIONS } from "../../../utils/queries.js";

const Reservations = () => {
	const { loading, data } = useQuery(QUERY_USER_RESERVATIONS);
	const reservationInfo = data?.me || [];
	const reservationArray = reservationInfo.reservationHistory;
	if (loading) {
		return <p>Loading!</p>;
	}
	if (!reservationArray) {
		return <p className="nothing-here"> There is nothing here!</p>;
	}
	return (
		<div>
			{reservationArray.map((reservation) => (
				<ListingCard key={reservation._id} campsite={reservation.campsite} singleReservation={reservation}>
					{reservation.campsite.name}
				</ListingCard>
			))}
			{/* <div>
        <h3 className="dash-listing-title">Active Listings</h3>
        <Link className="wrapper-link" to="/reservation-details">
          {/* <ListingCard /> */}
        {/* </Link>
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
export default Reservations;
