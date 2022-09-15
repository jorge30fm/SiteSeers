import React from "react";
import Carousel from "../../components/Carousel/Carousel";
//import Calendar from "../../components/Calendar/Calendar";
import "./PayConfirm.css";

const PayConfirm = () => {
  return (
    <main>
      <h2>You're all set!</h2>
      <div>
        <Carousel />
        <section>
          <h2>Site Name</h2>
          <h2>Location</h2>
        </section>
        <section>
          {/* <StartDate /> */}
          to
          {/* <EndDate /> */}
        </section>
        <section>
          <h3>Contact Information:</h3>
          <h4>Name:</h4>
          <h4>Phone:</h4>
          <h4>Email:</h4>
        </section>
      </div>
    </main>
  );
};

export default PayConfirm;
