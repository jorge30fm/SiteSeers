import React, { useState, useEffect } from "react";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import { useMutation } from "@apollo/client";
import { EDIT_CAMPSITE } from "../../../utils/mutations";

const Step6 = (props) => {
	const [images, setImages] = useState([]);
	const [editCampsite] = useMutation(EDIT_CAMPSITE);
	const campID = props.campID;

	var myWidget = window.cloudinary.createUploadWidget(
		{
			cloudName: "dxs0geixs",
			uploadPreset: "irkknuii",
		},
		async (error, result) => {
			if (!error && result && result.event === "success") {
				setImages((oldImages) => [
					...oldImages,
					`${result.info.public_id}.${result.info.format}`,
				]);
			}
		}
	);

	const handleOpenWidget = () => {
		myWidget.open();
	};
	const handleClick = async() => {
		try {
			await editCampsite({
				variables:{campID, images}
			});
			props.setStep(7)
		} catch(e) {console.log(e)}
	};

	return (
		<div>
			<h1 className="margin-top">Addimages to showcase your camp!</h1>
			<div
				id="upload_widget"
				onClick={handleOpenWidget}
				className="uploadImgs margin-top"
			>
				<InsertPhotoIcon fontSize="large" /> <br></br>
				Upload Images
			</div>
			<div className="='img-container flex-row margin-top justify-space-between">
				{images &&
					images.map((url, index) => (
						<div className="img-wrapper col-5" key={index}>
							<img
								src={`https://res.cloudinary.com/dxs0geixs/image/upload/c_scale,w_150/v1663797068/${url}`}
								alt=""
							></img>
						</div>
					))}
			</div>
			<div className="flex-row justify-center">
			<button className="btn " onClick={handleClick}>
					Next
			</button>
			</div>
		</div>
	);
};
export default Step6;
