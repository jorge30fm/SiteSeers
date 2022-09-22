import React, {useState, useEffect} from "react";
import { useMutation } from "@apollo/client";
import { EDIT_CAMPSITE } from "../../../utils/mutations";;

const Step5 = (props) => {
	const [rules, setRules] = useState('');
	const [checkInInfo, setCheckInInfo] = useState('');
	const [editCampsite] = useMutation(EDIT_CAMPSITE)
	const campID = props.campID
	const handleRulesChange = (e) =>{
		setRules(e.target.value)
	};
	const handleCheckInChange = (e) => {
		setCheckInInfo(e.target.value)
	}
	const handleClick = async() => {
		try {
			await editCampsite({
				variables: {campID, rules, checkInInfo}
			});
			props.setStep(6)
		} catch(e) {
			console.log(e)
		}
	}
	return (
		<>
			<h1 className="margin-top">
				What rules should guests follow when visiting?
			</h1>
			<h2 className="margin-top">Tell us about your campsite:</h2>
			<div>
				<div className="flex-column margin-top">
					<label>Rules:</label>
					<p className="label-desc">
						Tell your campers what rules your site has!
					</p>
					<textarea onChange={handleRulesChange}></textarea>
				</div>
                <div className="flex-column margin-top">
					<label>Check-In Info:</label>
					<p className="label-desc">Let your campers know how to check in.</p>
					<textarea onChange={handleCheckInChange}></textarea>
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
export default Step5;
