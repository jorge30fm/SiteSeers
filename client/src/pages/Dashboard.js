import React from "react";
import Account from "../components/DashComponents/Account";
import Reservations from "../components/DashComponents/Reservations";
import Listings from "../components/DashComponents/Listings";

const Dashboard = () => {
  return (
    <main>
        <h2>User's Dashboard</h2>
        <div className="tabs">
          <button>Account</button>
          <button>Reservations</button>
          <button>Listings</button>
        </div>
        <div className="tab-content">
          <Account />
        </div>
        <div className="tab-content">
          <Reservations />
        </div>
        <div className="tab-content">
          <Listings />
        </div>
    </main>
  );
};
export default Dashboard;
