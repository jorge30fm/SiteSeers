import React from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { EDIT_CAMPSITE } from "../../../utils/mutations";

const Step8 = (props) => {
	const navigate = useNavigate();

	const campID = props.campID;
	const [editCampsite] = useMutation(EDIT_CAMPSITE);

	const handlePublishClick = async () => {
		const active = true;
		try {
			editCampsite({
				variables: { campID, active },
			});
			navigate('/')
		} catch (e) {
			console.log(e);
		}
	};
	const handleUnpublishClick = async () => {
		const active = false;
		try {
			editCampsite({
				variables: { campID, active },
			});
			navigate('/')
		} catch (e) {
			console.log(e);
		}
	};
	return (
		<>
			<h1 className="margin-top">Ready to make the listing available? </h1>
			<div className="flex-row justify-space-between margin-top">
				<button className="btn col-6 noMargin" onClick={handlePublishClick}>
					Publish Listing
				</button>
				<button className="btn-secondary col-6" onClick={handleUnpublishClick}>
					Save unpublished
				</button>
			</div>
		</>
	);
};
export default Step8;
