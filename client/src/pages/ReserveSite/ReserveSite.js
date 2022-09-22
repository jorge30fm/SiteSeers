import React, { useState } from "react";
import "./ReserveSite.css";

import Auth from "../../utils/auth";

import { useNavigate, useParams } from "react-router-dom";

import Calendar from "../../components/ReserveComponents/Calendar/Calendar";
import RequestReserve from "../../components/ReserveComponents/RequestReserve/RequestReserve";

const ReserveSite = () => {
	const [value, setValue] = useState(new Date());
	const [campers, setCampers] = useState(1);
	const { id: _id } = useParams();
	const [showCalendar, setShowCalendar] = useState(true);
	const [showRequest, setShowRequest] = useState(false);
	const navigate = useNavigate();

	if (!Auth.loggedIn()) {
		navigate("/login");
	}

	return (
		<main>
			{showCalendar && (
				<Calendar
					campers={campers}
					setCampers={setCampers}
					value={value}
					setValue={setValue}
					setShowCalendar={setShowCalendar}
					setShowRequest={setShowRequest}
				></Calendar>
			)}
			{showRequest && (
				<RequestReserve campers={campers} value={value}></RequestReserve>
			)}
		</main>
	);
};

export default ReserveSite;
