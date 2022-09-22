import React from "react";
import "./CancelConfirm.css";
import Auth from "../../utils/auth";
import { useNavigate } from "react-router-dom";

import CheckCircle from "@mui/icons-material/CheckCircleOutline";

const CancelConfirm = () => {
	const navigate = useNavigate();
	if (!Auth.loggedIn()) {
		navigate("/login");
	}
	const handleClick = () => {
		navigate("/");
	};
	return (
		<main className="flex-column align-center justify-center padding">
			<h2>Success!</h2>
			<div className="padding">
				<CheckCircle style={{ fontSize: "100px" }} />
			</div>
			<p className="centered-text">
				Your reservation was successfully cancelled.
			</p>
			<button className="btn" onClick={handleClick}>
				Finish
			</button>
		</main>
	);
};
export default CancelConfirm;
