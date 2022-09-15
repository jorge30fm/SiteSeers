import React, { useState } from "react";
import "./ReserveSite.css";
import Calendar from "../../components/ReserveComponents/Calendar/Calendar";
import RequestReserve from "../../components/ReserveComponents/RequestReserve/RequestReserve";

const ReserveSite = () => {
  const [renderCalendar, setRenderCalendar] = useState(false);
  const [renderRequest, setRenderRequest] = useState(false);
  return (
    <main>
      <Calendar
        renderCalendar={renderCalendar}
        setRenderCalendar={setRenderCalendar}
      />
      <RequestReserve
        renderRequest={renderRequest}
        setRenderRequest={setRenderRequest}
      />
    </main>
  );
};

export default ReserveSite;
