import React from "react";

const Dashboard = () => {
  return (
    <main>
        <h2>User's Dashboard</h2>
        <div className="tabs">
          <button>Account</button>
          <button>Bookings</button>
          <button>Lisings</button>
          <button>Reviews</button>
        </div>
        <div className="tab-content">Account tab content here</div>
        <div className="tab-content">Bookings tab content here</div>
        <div className="tab-content">Listings tab content here</div>
        <div className="tab-content">Reviews tab content here</div>
    </main>
  );
};
export default Dashboard;
