// import React, { useState } from "react";

// const UploadImage = () => {
// 	const [images, setImages] = useState([]);
// 	const [imageToRemove, setImageToRemove] = useState(null);

// 	function handleRemoveImg(imgObj) {}

// 	var myWidget = window.cloudinary.createUploadWidget(
// 		{
// 			cloudName: "dxs0geixs",
// 			uploadPreset: "irkknuii",
// 		},
// 		(error, result) => {
// 			if (!error && result && result.event === "success") {
// 				console.log("Done! Here is the image info: ", result.info);
// 			}
// 		}
// 	);
//     const handleOpenWidget = () => {
//         myWidget.open();
//     }

// 	return (
// 		<>
// 			<button
// 				id="upload_widget"
// 				className="cloudinary-button"
// 				onClick={handleOpenWidget}
// 			>
// 				Upload files
// 			</button>
// 		</>
// 	);
// };
// export default UploadImage;
