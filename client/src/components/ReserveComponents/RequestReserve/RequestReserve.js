import React from "react";
import "./RequestReserve.css";
import Carousel from "../../Carousel/Carousel";

const RequestReserve = () => {
  return (
  <div>
    <Carousel />
    <p>date start to date end</p>
    <p>number of campers</p>
    <p>nightly rate x number of nights</p>
    <p>date --- $$$</p>
    <p>date --- $$$</p>
    <p>date --- $$$</p>
    <p>total</p>
    <section>
        <p>total: $$$</p>
        <button>Reserve</button>
    </section>
  </div>
  );
};

export default RequestReserve;
