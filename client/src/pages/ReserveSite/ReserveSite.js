import React, { useState } from "react";
import "./ReserveSite.css";

import Auth from "../../utils/auth";
import { Navigate } from "react-router-dom";

import Calendar from "../../components/ReserveComponents/Calendar/Calendar";
import RequestReserve from "../../components/ReserveComponents/RequestReserve/RequestReserve";

const ReserveSite = () => {
  const [showCalendar, setShowCalendar] = useState(true);
  const [showRequest, setShowRequest] = useState(false);

  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }

  return (
    <main>
      {showCalendar && (
        <Calendar
          showCalendar={showCalendar}
          setShowCalendar={setShowCalendar}
          showRequest={showRequest}
          setShowRequest={setShowRequest}
        ></Calendar>
      )}
      {showRequest && <RequestReserve></RequestReserve>}
    </main>
  );
};

export default ReserveSite;
