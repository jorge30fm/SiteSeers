import React, { useState } from "react";
import "./Dashboard.css";

import Auth from "../../utils/auth";
import { Navigate } from "react-router-dom";

import Account from "../../components/DashComponents/Account/Account";
import Reservations from "../../components/DashComponents/Reservations/Reservations";
import Listings from "../../components/DashComponents/Listings/Listings";
import Reviews from "../../components/DashComponents/Reviews/Reviews";

const Dashboard = () => {
  const [accountSelected, setAccountSelected] = useState(true);
  const [reservationsSelected, setReservationsSelected] = useState(false);
  const [listingsSelected, setListingsSelected] = useState(false);
  const [reviewsSelected, setReviewsSelected] = useState(false);

  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }

  return (
    <main>
      <section className="dash-section flex-row justify-center">
        <h2>Dashboard</h2>
      </section>
      <section className="dash-section">
        <div className="tab-container flex-row">
          <div
            className={`tab ${accountSelected && "selected"}`}
            onClick={() => {
              setAccountSelected(true);
              setReservationsSelected(false);
              setListingsSelected(false);
              setReviewsSelected(false);
            }}
          >
            <p>Account</p>
          </div>
          <div
            className={`tab ${reservationsSelected && "selected"}`}
            onClick={() => {
              setAccountSelected(false);
              setReservationsSelected(true);
              setListingsSelected(false);
              setReviewsSelected(false);
            }}
          >
            <p>Reservations</p>
          </div>
          <div
            className={`tab ${listingsSelected && "selected"}`}
            onClick={() => {
              setAccountSelected(false);
              setReservationsSelected(false);
              setListingsSelected(true);
              setReviewsSelected(false);
            }}
          >
            <p>Listings</p>
          </div>
          {/* Can uncomment after MVP presentation. ↓↓↓ */}
          <div
            className={`tab ${reviewsSelected && "selected"}`}
            onClick={() => {
              setAccountSelected(false);
              setReservationsSelected(false);
              setListingsSelected(false);
              setReviewsSelected(true);
            }}
          >
            <p>Reviews</p>
          </div>
        </div>
        <div className="tab-content-container">
          <div className="tab-content">{accountSelected && <Account />}</div>
          <div className="tab-content">
            {reservationsSelected && <Reservations />}
          </div>
          <div className="tab-content">{listingsSelected && <Listings />}</div>
          <div className="tab-content">{reviewsSelected && <Reviews />}</div>
        </div>
      </section>
    </main>
  );
};
export default Dashboard;
