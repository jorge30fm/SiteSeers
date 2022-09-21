import React from "react";

const Step1 = () => {
	return (
		<>
			<h1 className="margin-top">
				Let's get your campsite listing started!
			</h1>
			<h2 className="margin-top">Tell us about your campsite:</h2>
			<form>
				<div className="flex-column margin-top">
					<label>Camp Site Name:</label>
					<p className="label-desc">Name your campsite!</p>
					<input></input>
				</div>

				<div className="flex-column margin-top">
					<label>Rate:</label>
					<input></input>
				</div>

			</form>
		</>
	);
};
export default Step1;
