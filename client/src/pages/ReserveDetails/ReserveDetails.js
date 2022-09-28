import React, { useState } from "react";
import "./ReserveDetails.css";
import Auth from "../../utils/auth.js";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER_RESERVATIONS } from "../../utils/queries.js";
import Carousel from "../../components/Carousel/Carousel.js";
import CancelModal from "../../components/CancelModal/CancelModal.js";

const ReserveDetails = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const { id: reservationID } = useParams();

	const { loading, data } = useQuery(QUERY_USER_RESERVATIONS);
	if (loading) {
		return <div>Loading ...</div>;
	}

	const userReservationsList = data?.me.reservationHistory || {};
	let SingleReservation;
	userReservationsList.map((reservation) => {
		if (reservation._id === reservationID) {
			SingleReservation = reservation;
		}
	});

	if (!Auth.loggedIn()) {
		return <Navigate to="/login" />;
	}
	return (
		<main className="position-relative">
			<div className="flex-row justify-center align-center">
				<div className="col-12 col-md-6 col-lg-4">
					<Carousel campsite={SingleReservation.campsite} />
				</div>
				<section className="padding text-center flex-row justify-center col-12 col-md-6">
					<div className="flex-column justify-center col-12">
						<h2>{SingleReservation.campsite.name}</h2>
						<h4 className="margin-top">
							{SingleReservation.campsite.city},{" "}
							{SingleReservation.campsite.state}
						</h4>
						<div className="flex-column margin-top">
							<p>
								{SingleReservation.reservationStartDate} to{" "}
								{SingleReservation.reservationEndDate}
							</p>
							<p>
								for {SingleReservation.numberOfCampers} of camper
								{SingleReservation.numberOfCampers > 1 && "s"}
							</p>
						</div>
					</div>
					<div className="margin-top flex-column col-12">
						<h2>Owner Contact Information:</h2>
						<div className="margin-top">
							<p>
								<strong>Phone:</strong> {SingleReservation.campsite.phone}
							</p>
							<p>
								<strong>Email:</strong> {SingleReservation.campsite.email}
							</p>
						</div>
					</div>
					<div className="btn-container margin-top col-12 col-sm-8 col-md-6 col-lg-4 col-xl-3">
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
			</div>
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
					reservationID={SingleReservation._id}
					modalOpen={modalOpen}
					setModalOpen={setModalOpen}
				></CancelModal>
			</div>
		</main>
	);
};
export default ReserveDetails;
