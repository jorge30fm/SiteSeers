import React from "react";
import "./ReserveDetails.css";
import Carousel from "../../components/Carousel/Carousel";
import CancelModal from "../../components/CancelModal/CancelModal";

const ReserveDetails = () => {
  return (
    <main>
      <Carousel />
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
          <button className="btn">Cancel Reservation</button>
        </div>
      </section>
      <CancelModal></CancelModal>
    </main>
  );
};
export default ReserveDetails;
