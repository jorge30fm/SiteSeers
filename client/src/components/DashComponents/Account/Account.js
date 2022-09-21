import React from "react";
import { EDIT_USER } from "../../../utils/mutations";
import { QUERY_USER_INFO } from "../../../utils/queries";
import { useMutation, useQuery } from "@apollo/client";
import "./Account.css";
import Edit from "@mui/icons-material/Edit";

const Account = () => {
	const [editUser, { error }] = useMutation(EDIT_USER);

	const { loading, data } = useQuery(QUERY_USER_INFO);
	const userInfo = data?.me || {};

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

				try {
					editUser({
						variables: { profilePicture: `${public_id}.${format}` },
					});
				} catch (e) {
					console.log(e);
				}
			}
		}
	);
	const handleOpenWidget = () => {
		myWidget.open();
	};
	const handleDivClick = (e) => {
		const clickedDiv = e.target;
		const text = clickedDiv.textContent;
		const inputEl = document.createElement("textarea");
		inputEl.classList.add("input-to-text");
		inputEl.value = text;
		inputEl.addEventListener("blur", divOnBlur);
		clickedDiv.replaceWith(inputEl);
		inputEl.focus();
	};

	const divOnBlur = (e) => {
		const inputEl = e.target;
		const text = inputEl.value;
		const divEl = document.createElement("p");
		divEl.classList.add("text-to-input");
		divEl.textContent = text;
		divEl.addEventListener("click", handleDivClick);
		inputEl.replaceWith(divEl);
	};
	if (loading) {
		return <div>Loading...</div>;
	}

  const profilePicStyle = {
    backgroundImage: `url(https://res.cloudinary.com/dxs0geixs/image/upload/c_scale,w_135/v1663680167/${userInfo.profilePicture})`,
    backgroundSize: "cover",
  }
	return (
		<div>
			<div className="flex-row justify-space-between">
				<div className="pfp-container">
					<div
						className="pfp"style={profilePicStyle}></div>
					<Edit
						id="upload_widget"
						className="account-edit-icon "
						onClick={handleOpenWidget}
					/>
				</div>
				<div className="flex-column align-center">
					<h3>
						{userInfo.firstName} {userInfo.lastName}
					</h3>
					<p>Member since {userInfo.createdAt}</p>
				</div>
			</div>
			<div className="account-div flex-column">
				<div className="account-input-div flex-column">
					<p>About:</p>
					<div className="input-container about-container">
						<p onClick={handleDivClick} className="text-to-input">
							{userInfo.bio}
						</p>
					</div>
				</div>
				<div className="account-input-div flex-column ">
					<p>Email:</p>
					<div className="input-container">
						<p onClick={handleDivClick} className="text-to-input">
							{userInfo.email}
						</p>
					</div>
				</div>
				<div className="account-input-div flex-column">
					<p>Phone:</p>
					<div className="input-container">
						<p onClick={handleDivClick} className="text-to-input">
							{userInfo.phone}
						</p>
					</div>
				</div>
			</div>
			<div className="btn-container">
				<button className="btn">Save</button>
			</div>
		</div>
	);
};
export default Account;