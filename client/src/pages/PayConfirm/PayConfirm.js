import React from "react";

import Auth from "../../utils/auth";
import { useNavigate, useParams, Link } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { QUERY_USER_RESERVATIONS } from "../../utils/queries.js";
import Carousel from "../../components/Carousel/Carousel";
import "./PayConfirm.css";

const PayConfirm = () => {
	const { id: reservationID } = useParams();

	const navigate = useNavigate();
	if (!Auth.loggedIn()) {
		navigate("/login");
	}
	const { loading, data } = useQuery(QUERY_USER_RESERVATIONS);
	if (loading) {
		return <div>Loading ...</div>;
	}

	const userReservationsList = data?.me.reservationHistory || {};
	const latestReservation =
		userReservationsList[userReservationsList.length - 1];

	console.log(latestReservation);

	return (
		<main>
			<section className="flex-column align-center margin-top">
				<h2 className="font-bigger margin-top">You're all set!</h2>
			</section>
			<div className="flex-column align-center margin-top">
      <Carousel campsite={latestReservation.campsite} />
				<section className="flex-column align-center">
					<h2>{latestReservation.campsite.name}</h2>
					<h3>
						{latestReservation.campsite.city},{" "}
						{latestReservation.campsite.state}
					</h3>
				</section>
				<section className="flex-row justify-center margin-top">
					<p className="col-12 text-center">
						{latestReservation.reservationStartDate}
					</p>

					<p className="col-12 text-center">to</p>

					<p className="col-12 text-center">
						{latestReservation.reservationEndDate}
					</p>
				</section>
				<section className="flex-column align-center margin-top">
					<h3>Owner's Contact Information:</h3>
					<h4>Phone: {latestReservation.campsite.phone}</h4>
					<h4>Email: {latestReservation.campsite.email}</h4>
				</section>
				<Link to="/">
					<button className="margin-top btn btn-long">Finish</button>
				</Link>
			</div>
		</main>
	);
};

export default PayConfirm;
