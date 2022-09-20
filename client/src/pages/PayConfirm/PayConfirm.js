import React from "react";

import Auth from "../../utils/auth";
import { Navigate } from "react-router-dom";

import Carousel from "../../components/Carousel/Carousel";
import "./PayConfirm.css";

const PayConfirm = () => {
  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }

  return (
    <main>
      <section className="flex-column align-center">
        <h2>You're all set!</h2>
      </section>
      <div className="flex-column align-center">
        <Carousel />
        <section>
          <h2>Site Name</h2>
          <h2>Location</h2>
        </section>
        <section className="flex-row justify-center">
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
