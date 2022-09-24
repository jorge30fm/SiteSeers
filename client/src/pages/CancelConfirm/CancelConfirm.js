import React from "react";
import "./CancelConfirm.css";
import Auth from "../../utils/auth.js";
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
			<h1>Success!</h1>
			<div className="padding">
				<CheckCircle style={{ fontSize: "100px" }} />
			</div>
			<h2 className="centered-text">
				Your reservation was successfully cancelled.
			</h2>
			<button className="btn btn-long margin-top" onClick={handleClick}>
				Finish
			</button>
		</main>
	);
};
export default CancelConfirm;
