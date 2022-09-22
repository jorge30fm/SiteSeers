import React, { useState } from "react";
import "./Calendar.css";
import Calendar from "react-calendar";

// import "react-calendar/dist/Calendar.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const CalendarView = (props) => {
	const {
		setShowCalendar,
		setShowRequest,
		value,
		setValue,
		campers,
		setCampers,
	} = props;

	const handleOnChange = (e) => {
		setValue(e);
		console.log(e);
	};
  const handleDecrement = () => {
    if (campers > 0){
    setCampers(campers - 1)
    } else { setCampers(0)}
  }
  const handleIncrement =()=>{
    setCampers(campers +1)
  }
	return (
		<section className="flex-column align-center">
			<div className="calendar-section">
				<h2>How many campers?</h2>
				<div className="ticker flex-row justify-center">
					<AddCircleOutlineIcon onClick={handleDecrement}/> {campers} <RemoveCircleOutlineIcon onClick={handleIncrement} />
				</div>
			</div>
			<Calendar
				onChange={handleOnChange}
				value={value}
				selectRange={true}
				calendarType={"US"}
			/>
			<div className="btn-container calendar-section">
				<button
					className="btn btn-long"
					onClick={() => {
						setShowCalendar(false);
						setShowRequest(true);
					}}
				>
					Continue
				</button>
			</div>
		</section>
	);
};

export default CalendarView;
