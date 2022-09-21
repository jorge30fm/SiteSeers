import React from "react";

const Step7 = () => {
	return (
		<>
			<h1 className="margin-top">
				Let campers know who you are and how to reach you!
			</h1>

			<form>
            <div className="flex-column margin-top">
					<label>Host Bio:</label>
					<p className="label-desc">
						Tell your campers a little about yourself!
					</p>
					<input></input>
				</div>
				<div className="flex-column">
					{/* <div className="flex-row"> */}
					<div className="flex-column margin-top">
						<label>Phone:</label>
						<input type="phone"></input>
					</div>
					<div className="flex-column margin-top">
						<label>Email:</label>
						<input type="email"></input>
					</div>
				</div>


			</form>
		</>
	);
};
export default Step7;
