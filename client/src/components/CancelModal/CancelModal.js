import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CancelModal.css";
import { DELETE_RESERVATION } from "../../utils/mutations.js";
import { useMutation } from "@apollo/client";

const CancelModal = (props) => {
	const { setModalOpen } = props;
  const _id= props.reservationID;
	const navigate = useNavigate();
	const [deleteReservation] = useMutation(DELETE_RESERVATION);

	const handleOnClick = async () => {
		try {
			await deleteReservation({
				variables: { _id: _id },
			});
			navigate("/cancel-confirm");
		} catch (e) {
			console.log(e);
		}
	};
	return (
		<div className="flex-column justify-content-center">
			<h2>Are you sure you want to cancel your reservation?</h2>
			<div className="btn-container">
				<button className="btn btn-long" onClick={handleOnClick}>
					Cancel
				</button>
			</div>
			<div className="btn-container">
				<button
					className="btn btn-faded btn-long"
					onClick={() => {
						setModalOpen(false);
					}}
				>
					Go back
				</button>
			</div>
		</div>
	);
};
export default CancelModal;
