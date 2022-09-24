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
      <section className="padding text-center">
        <div className="flex-column justify-center">
          <h2>{reservation.campsite.name}</h2>
          <h4 className="margin-top">
            {reservation.campsite.city}, {reservation.campsite.state}
          </h4>
          <div className="flex-column margin-top">
            <p>
              {reservation.reservationStartDate} to {reservation.reservationEndDate}
            </p>
            <p>
              for {reservation.numberOfCampers} of camper
              {reservation.numberOfCampers > 1 && "s"}
            </p>
          </div>
        </div>
        <div className="margin-top flex-column">
          <h2>Owner Contact Information:</h2>
          <div className="margin-top">
            <p>
              <strong>Phone:</strong> {reservation.campsite.phone}
            </p>
            <p>
              <strong>Email:</strong> {reservation.campsite.email}
            </p>
          </div>
        </div>
        <div className="btn-container margin-top">
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
