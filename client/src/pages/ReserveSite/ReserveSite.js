import React from "react";
import "./ReserveSite.css";
import Calendar from "../../components/ReserveComponents/Calendar/Calendar";
import RequestReserve from "../../components/ReserveComponents/RequestReserve/RequestReserve";

const ReserveSite = () => {
  return (
    <main>
      <Calendar />
      <RequestReserve />
    </main>
  );
};

export default ReserveSite;
