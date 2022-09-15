import React from "react";
import "./Reservations.css"
import ListingCard from "../../ListingCard/ListingCard";

const Reservations = () => {
  return (
    <div>
      <div>
        <h3 className="dash-reserve-title">Upcoming Reservations</h3>
        <ListingCard />
      </div>
      <div className="dash-border-top">
        <h3 className="dash-reserve-title">Previous Reservations</h3>
        <ListingCard />
      </div>
    </div>
  );
};
export default Reservations;
