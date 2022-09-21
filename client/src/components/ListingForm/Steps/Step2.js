/* eslint-disable default-case */
import React, { useState } from "react";
import Select from "react-select";
import { EDIT_CAMPSITE } from "../../../utils/mutations";
import { useMutation } from "@apollo/client";
const optionStates = [
	{ value: "Alabama", label: "AL" },
	{ value: "Alaska", label: "AK " },
	{ value: "Arizona", label: "AZ" },
	{ value: "Arkansas", label: "AR" },
	{ value: "California", label: "CA" },
	{ value: "Colorado", label: "CO" },
	{ value: "Connecticut", label: "CT" },
	{ value: "Delaware", label: "DE" },
	{ value: "Florida", label: "FL" },
	{ value: "Georgia", label: "GA" },
	{ value: "Hawaii", label: "HI" },
	{ value: "Idaho", label: "ID" },
	{ value: "Illinois", label: "IL" },
	{ value: "Indiana", label: "IN" },
	{ value: "Iowa", label: "IA" },
	{ value: "Kansas", label: "KS" },
	{ value: "Kentucky", label: "KY" },
	{ value: "Louisiana", label: "LA" },
	{ value: "Maine", label: "ME" },
	{ value: "Maryland", label: "MD" },
	{ value: "Massachusetts", label: "MA" },
	{ value: "Michigan", label: "MI" },
	{ value: "Minnesota", label: "MN" },
	{ value: "Mississippi", label: "MS" },
	{ value: "Missouri", label: "MO" },
	{ value: "Montana", label: "MT" },
	{ value: "Nebraska", label: "NE" },
	{ value: "Nevada", label: "NV" },
	{ value: "New Hampshire", label: "NH" },
	{ value: "New Jersey", label: "NJ" },
	{ value: "New Mexico", label: "NM" },
	{ value: "New York", label: "NY" },
	{ value: "North Carolina", label: "NC" },
	{ value: "North Dakota", label: "ND" },
	{ value: "Ohio", label: "OH" },
	{ value: "Oklahoma", label: "OK" },
	{ value: "Oregon", label: "OR" },
	{ value: "Pennsylvania", label: "PA" },
	{ value: "Rhode Island", label: "RI" },
	{ value: "South Carolina", label: "SC" },
	{ value: "South Dakota", label: "SD" },
	{ value: "Tennessee", label: "TN" },
	{ value: "Texas", label: "TX" },
	{ value: "Utah", label: "UT" },
	{ value: "Vermont", label: "VT" },
	{ value: "Virginia", label: "VA" },
	{ value: "Washington", label: "WA" },
	{ value: "West Virginia", label: "WV" },
	{ value: "Wisconsin", label: "WI" },
	{ value: "Wyoming", label: "WY" },
];

const Step2 = (props) => {
	const [streetAddress, setStreetAdress] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [zipCode, setZipcode] = useState("");
	const _id = props.campID;
	const [editCampsite, { error }] = useMutation(EDIT_CAMPSITE);

	function customTheme(theme) {
		return {
			...theme,
			borderRadius: 10,
			colors: {
				primary25: "#96a68d",
				neutral0: "field",
				neutral10: "#96a68d",
			},
		};
	}

	const handleOnChange = (e) => {
		switch (e.target.id) {
			case "streetAddress":
				setStreetAdress(e.target.value);
				console.log(props.campID)
				break;
			case "city":
				setCity(e.target.value);
				break;
			case "zipCode":
				setZipcode(e.target.value);
				break;
		}
	};
	const handleClick = async () => {
		try {
			await editCampsite({
				variables: {
					_id,
					streetAddress,
					city,
					state,
					zipCode,
				},
			});
			props.setStep(3);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<>
			<h1 className="margin-top col-12">Where are you located?</h1>

			<div>
				<div className="flex-column margin-top">
					{/* TODO: add address auto suggest */}
					<label>Street Address:</label>
					<p className="label-desc"></p>
					<input
						type="text"
						id="streetAddress"
						onChange={handleOnChange}
					></input>
				</div>
				<div className="flex-column margin-top">
					{/* TODO: add address auto suggest */}
					<label>City:</label>
					<p className="label-desc"></p>
					<input type="text" id="city" onChange={handleOnChange}></input>
				</div>
				<div className="flex-column margin-top">
					<label>State:</label>
					<Select
						onChange={({ value }) => setState(value)}
						options={optionStates}
						theme={customTheme}
						className="flex-column input-margin "
						placeholder="Select State"
						isSearchable
						autoFocus
						noOptionsMessage={() => "No more terrains :("}
					/>
				</div>
				<div className="flex-column margin-top">
					{/* TODO: add address auto suggest */}
					<label>Zip Code:</label>
					<p className="label-desc"></p>
					<input id="zipCode" onChange={handleOnChange}></input>
				</div>
				<button className="btn" onClick={handleClick}>
					Next
				</button>
			</div>
		</>
	);
};
export default Step2;
