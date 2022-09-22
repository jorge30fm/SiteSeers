import React, {useState, useEffect} from "react";
import { useMutation } from "@apollo/client";
import { EDIT_CAMPSITE } from "../../../utils/mutations";;

const Step4 = (props) => {
	const [description, setDescription] = useState('')
	const [editCampsite] =useMutation(EDIT_CAMPSITE);
	const campID = props.campID
	const handleChange= (e) => {
		setDescription(e.target.value)
	};
	const handleClick = async() => {
		try {
			await editCampsite({
				variables: {campID, description}
			});
			props.setStep(5)
		} catch(e) {
			console.log(e)
		}
	}
	return (
		<>
			<h1 className="margin-top col-12">
				Describe your camp to guests!
			</h1>

			<div>
			<div className="flex-column margin-top">
					<label>Description:</label>
					<p className="label-desc"></p>
					<textarea onChange={handleChange}></textarea>
				</div>
				<div className="flex-row justify-center">
				<button className="btn" onClick={handleClick}>
					Next
				</button>
				</div>
			</div>
		</>
	);
};
export default Step4;
