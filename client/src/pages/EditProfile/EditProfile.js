import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { EDIT_USER } from "../../utils/mutations.js";
import { QUERY_USER_INFO } from "../../utils/queries.js";
import "./EditProfile.css";
import Edit from "@mui/icons-material/Edit";

const EditProfile = () => {
	const [editUser, { error }] = useMutation(EDIT_USER);
	const [bio, setBio] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
  const navigate = useNavigate();

	const { loading, data } = useQuery(QUERY_USER_INFO);
	const userInfo = data?.me || {};
	if (loading) {
		return <div>Loading...</div>;
	}

	var myWidget = window.cloudinary.createUploadWidget(
		{
			cloudName: "dxs0geixs",
			uploadPreset: "irkknuii",
		},
		async (error, result) => {
			if (!error && result && result.event === "success") {
				const { public_id, format } = result.info;


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

	const profilePicStyle = {
		backgroundImage: `url(https://res.cloudinary.com/dxs0geixs/image/upload/c_scale,w_135/v1663680167/${userInfo.profilePicture})`,
		backgroundSize: "cover",
	};
	const handleBioOnChange = (e) => {
		setBio(e.target.value);
	};
	const handlePhoneOnChange = (e) => {
		setPhone(e.target.value);
	};
	const handleEmailOnChange = (e) => {
		setEmail(e.target.value);
	};
	const handleOnClick = async () => {
		try {
			await editUser({
				variables: { bio, email, phone },
			});
      navigate('/')

		} catch (e) {
			console.log(e);
		}
	};
	return (
		<div className="padding">
			<div className="flex-row justify-space-between">
				<div className="pfp-container">
					<div className="pfp" style={profilePicStyle}></div>
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
					<p className="member-since">Member since {userInfo.createdAt}</p>
				</div>
			</div>
			<div className="account-div flex-column">
				<div>
					<div>
						<div className="flex-column margin-top">
							<label>About:</label>
							<input
								className="about-container"
								placeholder="Please enter updated bio"
								onChange={handleBioOnChange}
							></input>
						</div>
						<div className="flex-column margin-top">
							<label>Email:</label>
							<input
								placeholder="Please enter email"
								className="form-input"
								onChange={handleEmailOnChange}
							/>
						</div>
					</div>
					<div className="flex-column margin-top">
						<label>Phone:</label>
						<input
							className="form-input"
							placeholder="Please enter phone number"
							onChange={handlePhoneOnChange}
						/>
					</div>
					<div className="margin-top padding flex-row justify-space-around">
						<div className="btn-container">
							<button className="btn btn-long" onClick={handleOnClick}>
								Update
							</button>
						</div>
						<Link to="/">
							<button className="btn btn-faded btn-long">Cancel</button>
						</Link>
					</div>
				</div>
				{error && (
					<div className="margin-top flex-column align-center">
						Something went wrong. Try again or hit cancel to return to the
						account page.
					</div>
				)}
			</div>
		</div>
	);
};

export default EditProfile;
