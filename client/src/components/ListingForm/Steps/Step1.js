import { resolveBreakpointValues } from "@mui/system/breakpoints";
import React, { useState } from "react";
import { ADD_CAMPSITE } from "../../../utils/mutations";
import { useMutation } from "@apollo/client";

const Step1 = (props) => {
	const [addCampsite, { error }] = useMutation(ADD_CAMPSITE);

	const [name, setName] = useState("");
	const [price, setPrice] = useState(null);

	const handleOnChange = (e) => {
		// eslint-disable-next-line default-case
		switch (e.target.id) {
			case "name":
				setName(e.target.value);
				break;
			case "price":
				setPrice(parseInt(e.target.value));
				break;
		}
	};
	const handleClick = async () => {
		try {
			const newCampsite = await addCampsite({
				variables: { name, price },
			});
			props.setCampID(newCampsite.data.addCampsite._id);

			props.setStep(2);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<>
			<h1 className="margin-top">Let's get your campsite listing started!</h1>
			<h2 className="margin-top">Tell us about your campsite:</h2>
			<div>
				<div className="flex-column margin-top">
					<label>Camp Site Name:</label>
					<p className="label-desc">Name your campsite!</p>
					<input type="text" id="name" onChange={handleOnChange}></input>
				</div>

				<div className="flex-column margin-top">
					<label>Rate:</label>
					<p className="label-desc">per night</p>
					<input type="number" id="price" onChange={handleOnChange}></input>
				</div>
				<div className="flex-row justify-center">
					<button className="btn " onClick={handleClick}>
						Next
					</button>
				</div>
			</div>
		</>
	);
};
export default Step1;
