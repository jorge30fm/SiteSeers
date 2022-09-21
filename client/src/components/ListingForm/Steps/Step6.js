import React from "react";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";

const Step6 = () => {
	var myWidget = window.cloudinary.createUploadWidget(
		{
			cloudName: "dxs0geixs",
			uploadPreset: "irkknuii",
		},
		async (error, result) => {
			if (!error && result && result.event === "success") {
				const { public_id, format } = result.info;
				console.log(result.info);
				console.log(public_id);
			}
		}
	);
	const handleOpenWidget = () => {
		myWidget.open();
	};

	return (
		<>
			<h1 className="margin-top">Addimages to showcase your camp!</h1>
			<div id="upload_widget" onClick={handleOpenWidget} className='uploadImgs'>
				<InsertPhotoIcon fontSize="large" /> <br></br>
				Upload Image
			</div>
		</>
	);
};
export default Step6;
