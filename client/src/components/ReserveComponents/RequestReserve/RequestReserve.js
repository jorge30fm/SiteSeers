import React, { useState } from "react";
import "./RequestReserve.css";
import { useNavigate, useParams } from "react-router-dom";
import Carousel from "../../Carousel/Carousel.js";

import { QUERY_CAMPSITE } from "../../../utils/queries.js";
import { useQuery, useMutation } from "@apollo/client";
import { calculateNumNights, formatDate } from "../../../utils/utils.js";
import { ADD_RESERVATION } from "../../../utils/mutations.js";


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
	};
	return (
		<div>
			<Carousel campsite={campsite} />
			<section className="padding flex-column align-start">
				<h1>{campsite.name}</h1>
				<h3>
					{campers} camper{campers > 1 && "s"}
				</h3>
				<div>
					<div className="flex-row margin-top">
						<p>{reservationStartDate} through {reservationEndDate}</p>
					</div>
					<div className="flex-row margin-top justify-space-between">
						<p>
							${campsite.price} x {totalNights} night{totalNights > 1 && "s"}
						</p>
						<p>${totalPrice}</p>
					</div>
					<div className="flex-row justify-space-between margin-top">
						<p className="total">Total: </p>
						<p className="total">${totalPrice}</p>
					</div>
					<div className="btn-container margin-top">
						<button className="btn btn-long" onClick={handleClick}>
							Reserve
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default RequestReserve;
