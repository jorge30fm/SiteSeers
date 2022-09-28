import React from "react";
import "./Reservations.css";
import { Link } from "react-router-dom";
import ListingCard from "../../ListingCard/ListingCard.js";
import { useQuery } from "@apollo/client";
import { QUERY_USER_RESERVATIONS } from "../../../utils/queries.js";

const Reservations = () => {
	const { loading, data } = useQuery(QUERY_USER_RESERVATIONS);
	const reservationInfo = data?.me || [];
	const reservationArray = reservationInfo.reservationHistory;
	if (loading) {
		return <p>Loading!</p>;
	}
	if (!reservationArray.length) {
		return (
			<div className="flex-row justify-center">
				<p className="nothing-here text-center top-margin"> There is nothing here!</p>
				<Link to="/search">
					<button className="btn col-12 top-margin btn-long">Search Campsites</button>
				</Link>
			</div>
		);
	}
	return (
		<div className="flex-row">
			{reservationArray.map((reservation) => (
				<ListingCard
					key={reservation._id}
					campsite={reservation.campsite}
					singleReservation={reservation}
				>
					{reservation.campsite.name}
				</ListingCard>
			))}
		</div>
	);
};
export default Reservations;
