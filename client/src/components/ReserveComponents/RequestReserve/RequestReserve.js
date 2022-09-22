import React, { useState } from "react";
import "./RequestReserve.css";
import { useNavigate, useParams } from "react-router-dom";
import Carousel from "../../Carousel/Carousel";

import { QUERY_CAMPSITE } from "../../../utils/queries";
import { useQuery, useMutation } from "@apollo/client";
import { calculateNumNights } from "../../../utils/utils";
import { ADD_RESERVATION } from "../../../utils/mutations.js";

import { formatDate } from "../../../utils/utils";

const RequestReserve = (props) => {
	const navigate = useNavigate();
	const { id: _id } = useParams();
	const { value, campers } = props;
	const [addReservation] = useMutation(ADD_RESERVATION);

	const { loading, data } = useQuery(QUERY_CAMPSITE, {
		variables: { _id: _id },
	});
	const campsite = data?.campsites[0] || {};
	if (loading) {
		return <div>Loading...</div>;
	}
	const totalNights = calculateNumNights(value[0], value[1]);
	const totalPrice = totalNights * campsite.price;

	const reservationStartDate = formatDate(value[0]);
	const reservationEndDate = formatDate(value[1]);

	const handleClick = async () => {
		const campsite = _id;
		let numberOfCampers = campers;

		try {
			const response = await addReservation({
				variables: {
					totalPrice,
					reservationStartDate,
					reservationEndDate,
					numberOfCampers,
					campsite,
				},
			});
			const reservationsList = response.data.addReservation.reservationHistory;
			const reservationID = reservationsList[reservationsList.length - 1]._id;

			navigate(`/pay-confirm/${reservationID}`)
		} catch (e) {
			console.log(e);
		}
		console.log(numberOfCampers);
	};
	return (
		<div>
			<Carousel campsite={campsite} />
			<section className="reserve-section flex-column align-start">
				<h1>{campsite.name}</h1>
				<h3>
					{" "}
					{campers} camper{campers > 1 && "s"}
				</h3>
				<div>
					<div className="flex-row justify-space-between margin-top">
						<p>{reservationStartDate}</p>
						<p>through</p>
						<p>{reservationEndDate}</p>
					</div>
					<div className="flex-row justify-space-between">
						<p>
							${campsite.price} x {totalNights} night{totalNights > 1 && "s"}
						</p>
						<p>${totalPrice}</p>
					</div>
					<div className="flex-row justify-space-between margin-top">
						<p>Total: </p>
						<p>${totalPrice}</p>
					</div>
					{/* for each for div below */}

					<div className="flex-row justify-center">
						<button className="btn" onClick={handleClick}>
							Reserve
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default RequestReserve;
