import React from "react";

const Step5 = () => {
	return (
		<>
			<h1 className="margin-top">
				What rules should guests follow when visiting?
			</h1>
			<h2 className="margin-top">Tell us about your campsite:</h2>
			<form>
				<div className="flex-column margin-top">
					<label>Rules:</label>
					<p className="label-desc">
						Tell your campers what rules your site has!
					</p>
					<textarea></textarea>
				</div>
                <div className="flex-column margin-top">
					<label>Check-In Info:</label>
					<p className="label-desc">Let your campers know how to check in.</p>
					<textarea></textarea>
				</div>
			</form>
		</>
	);
};
export default Step5;
