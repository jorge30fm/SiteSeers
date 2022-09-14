import React, { useState } from "react";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const CalendarView = () => {
  const [value, onChange] = useState(new Date());
  return (
    <main>
      <h2>How many campers?</h2>
      <section className="ticker">
        <AddCircleOutlineIcon /> 1 <RemoveCircleOutlineIcon />
      </section>
      <div>
        <Calendar onChange={onChange} value={value} />
      </div>
    </main>
  );
};

export default CalendarView;
