import React from "react";
import "./RequestReserve.css";
import Carousel from "../../Carousel/Carousel";

const RequestReserve = () => {
  return (
    <div>
      <Carousel />
      <section className="reserve-section flex-column align-start">
        <h3>date start to date end</h3>
        <h3>number of campers</h3>
        <div>
          <p>Nightly Rate x numOfNights</p>
          {/* for each for div below */}
          <div className="flex-row justify-space-between">
            <p>insert date here</p>
            <p>$$$</p>
          </div>
          <div className="flex-row justify-space-between">
            <p>Total:</p>
            <p>$$$</p>
          </div>
          <div className="flex-row justify-space-between">
            <div className="flex-column align-center">
              <p>Total:</p>
              <p>$$$</p>
            </div>
            <a href="/pay-confirm">
              <button className="btn">Reserve</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RequestReserve;
