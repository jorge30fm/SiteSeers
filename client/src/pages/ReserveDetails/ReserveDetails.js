import React, { useState } from "react";
import "./ReserveDetails.css";
import Auth from "../../utils/auth";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER_RESERVATIONS} from "../../utils/queries";
import Carousel from "../../components/Carousel/Carousel";
import CancelModal from "../../components/CancelModal/CancelModal";

const ReserveDetails = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const {id: reservationID} = useParams();
  console.log(reservationID)

  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }

  return (
    <main className="position-relative">
      {/* <Carousel /> */}
      <section className="section-padding">
        <div className="margin-bottom">
          <h3>Camp Name</h3>
          <h4>Location</h4>
          <p>date start to date end</p>
          <p>for num of campers</p>
        </div>
        <div className="margin-bottom">
          <h3>Contact Information:</h3>
          <p>Name:</p>
          <p>Phone:</p>
          <p>Email:</p>
        </div>
        <div className="btn-container">
          <button
            onClick={() => {
              setModalOpen(true);
            }}
            className="btn"
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
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        ></CancelModal>
      </div>
    </main>
  );
};
export default ReserveDetails;
