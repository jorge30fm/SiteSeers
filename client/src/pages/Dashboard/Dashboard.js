import React, { useState } from "react";
import "./Dashboard.css";
import Account from "../../components/DashComponents/Account";
import Reservations from "../../components/DashComponents/Reservations";
import Listings from "../../components/DashComponents/Listings";

const Dashboard = () => {
  const [accountSelected, setAccountSelected] = useState(false);
  const [reservationsSelected, setReservationsSelected] = useState(false);
  const [listingsSelected, setListingsSelected] = useState(false);

  return (
    <main>
      <section className="dash-section">
        <h2>User's Dashboard</h2>
      </section>
      <section className="dash-section">
        <div className="tab-container flex-row">
          <div
            className={`tab ${accountSelected && "selected"}`}
            onClick={() => {
              setAccountSelected(true);
              setReservationsSelected(false);
              setListingsSelected(false);
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
            }}
          >
            <p>Listings</p>
          </div>
        </div>
        <div className="tab-content-container">
          <div className="tab-content">{accountSelected && <Account />}</div>
          <div className="tab-content">
            {reservationsSelected && <Reservations />}
          </div>
          <div className="tab-content">{listingsSelected && <Listings />}</div>
        </div>
      </section>
    </main>
  );
};
export default Dashboard;
