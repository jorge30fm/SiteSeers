import React, { useState } from "react";
import { EDIT_CAMPSITE } from "../../../utils/mutations";
import { useMutation } from "@apollo/client";

const Step7 = (props) => {
	const [hostBio, setHostBio] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [editCampsite] = useMutation(EDIT_CAMPSITE);
	const campID = props.campID;

	const handleBioOnChange = (e) => {
		setHostBio(e.target.value);
	};
	const handlePhoneOnChange = (e) => {
		setPhone(e.target.value);
	};
	const handleEmailOnChange = (e) => {
		setEmail(e.target.value);
	};

	const handleClick = async () => {
		try {
			await editCampsite({
				variables: { campID, hostBio, phone, email },
			});
			props.setStep(8);
		} catch (e) {
			console.log(e);
		}
	};
	return (
		<>
			<h1 className="margin-top">
				Let campers know who you are and how to reach you!
			</h1>

			<div className="flex-column margin-top">
				<label>Host Bio:</label>
				<p className="label-desc">Tell your campers a little about yourself!</p>
				<input onChange={handleBioOnChange}></input>
			</div>
			<div className="flex-column">
				{/* <div className="flex-row"> */}
				<div className="flex-column margin-top">
					<label>Phone:</label>
					<input type="phone" onChange={handlePhoneOnChange}></input>
				</div>
				<div className="flex-column margin-top">
					<label>Email:</label>
					<input type="email" onChange={handleEmailOnChange}></input>
				</div>
			</div>
			<div className="flex-row justify-center">
				<button className="btn" onClick={handleClick}>
					Next
				</button>
			</div>
		</>
	);
};
export default Step7;
