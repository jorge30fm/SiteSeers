import React from "react";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const calendarView = () => {
  return (
    <main>
      <h2>How many campers?</h2>
      <section className="ticker">
        <AddCircleOutlineIcon /> 1 <RemoveCircleOutlineIcon />
      </section>
      <Calendar />
    </main>
  );
};

export default calendarView;
