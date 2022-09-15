import React, { useState } from "react";
import "./Calendar.css";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const CalendarView = () => {
  const [value, onChange] = useState(new Date());
  return (
    <section className="flex-column align-center">
      <div className="calendar-section">
        <h2>How many campers?</h2>
        <div className="ticker flex-row justify-center">
          <AddCircleOutlineIcon /> 1 <RemoveCircleOutlineIcon />
        </div>
      </div>
      <div className="calendar-container">
        <Calendar onChange={onChange} value={value} />
      </div>
      <div className="btn-container calendar-section">
        <button>Continue</button>
      </div>
    </section>
  );
};

export default CalendarView;
