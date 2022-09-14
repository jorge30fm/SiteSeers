import React, { useState } from "react";
import Account from "../../components/DashComponents/Account";
import Reservations from "../../components/DashComponents/Reservations";
import Listings from "../../components/DashComponents/Listings";

const Dashboard = () => {
  const [accountSelected, setAccountSelected] = useState(false);
  const [reservationsSelected, setReservationsSelected] = useState(false);
  const [listingsSelected, setListingsSelected] = useState(false);

  return (
    <main>
      <h2>User's Dashboard</h2>
      <div className="tabs">
        <button
          onClick={() => {
            setAccountSelected(true);
            setReservationsSelected(false);
            setListingsSelected(false);
          }}
        >
          Account
        </button>
        <button
          onClick={() => {
            setAccountSelected(false);
            setReservationsSelected(true);
            setListingsSelected(false);
          }}
        >
          Reservations
        </button>
        <button
          onClick={() => {
            setAccountSelected(false);
            setReservationsSelected(false);
            setListingsSelected(true);
          }}
        >
          Listings
        </button>
      </div>
      <div className="tab-content">{accountSelected && <Account />}</div>
      <div className="tab-content">
        {reservationsSelected && <Reservations />}
      </div>
      <div className="tab-content">{listingsSelected && <Listings />}</div>
    </main>
  );
};
export default Dashboard;
