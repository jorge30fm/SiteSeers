import React, { useState } from "react";
import "./ReserveDetails.css";
import Auth from "../../utils/auth";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER_RESERVATIONS } from "../../utils/queries";
import Carousel from "../../components/Carousel/Carousel";
import CancelModal from "../../components/CancelModal/CancelModal";

const ReserveDetails = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const { id: reservationID } = useParams();

	const { loading, data } = useQuery(QUERY_USER_RESERVATIONS);
	if (loading) {
		return <div>Loading ...</div>;
	}

	const userReservationsList = data?.me.reservationHistory || {};

	const reservationArr = userReservationsList.map((reservation) => {
		if (reservation._id === reservationID) {
			return reservation;
		} else {
			return false;
		}
	});
	const reservation = reservationArr[0];
	if (!Auth.loggedIn()) {
		return <Navigate to="/login" />;
	}

	return (
		<main className="position-relative">
			<Carousel campsite={reservation.campsite} />
			<section className="section-padding">
				<div className="margin-bottom flex-row justify-center">
					<h2>{reservation.campsite.name}</h2>
					<h4>
						{reservation.campsite.city}, {reservation.campsite.state}
					</h4>
					<div className="flex-row justify-center margin-top">
						<p className="col-12 text-center">{reservation.reservationStartDate}</p>
						<br></br>
						<p className="text-center col-12">to</p>
						<br></br>
						<p className="col-12 text-center">{reservation.reservationEndDate}</p>
						<p>for {reservation.numberOfCampers} of camper{reservation.numberOfCampers > 1 && 's'}</p>
					</div>
				</div>
				<div className="margin-bottom margin-top flex-row justify-center">
					<h2>Owner Contact Information:</h2>
					<p><strong>Phone:</strong> {reservation.campsite.phone}</p>
					<p><strong>Email:</strong> {reservation.campsite.email}</p>
				</div>
				<div className="btn-container">
					<button
						onClick={() => {
							setModalOpen(true);
						}}
						className="btn btn-long"
					>
						Cancel Reservation
					</button>
				</div>
			</section>
			<div
				className={`page-cover ${modalOpen && "modal-open"} ${
					!modalOpen && "modal-close"
				}`}
			></div>
			<div
				className={`flex-column modal-wrapper ${modalOpen && "modal-open"} ${
					!modalOpen && "modal-close"
				}`}
			>
				<CancelModal
          reservationID={reservation._id}
					modalOpen={modalOpen}
					setModalOpen={setModalOpen}
				></CancelModal>
			</div>
		</main>
	);
};
export default ReserveDetails;
