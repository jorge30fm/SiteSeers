import React, { useState, useEffect } from "react";
import { EDIT_USER } from "../../../utils/mutations.js";
import { QUERY_USER_INFO } from "../../../utils/queries.js";
import { useMutation, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import "./Account.css";
import Edit from "@mui/icons-material/Edit";

const Account = () => {
	const [editUser, { error }] = useMutation(EDIT_USER);

	const [bio, setBio] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");

	const { loading, data } = useQuery(QUERY_USER_INFO);
	const userInfo = data?.me || {};

	useEffect(() => {
		if (!loading && data) {
			setBio(data.me.bio);
			setEmail(data.me.email);
			setPhone(data.me.phone);
		}
	}, [loading, data]);

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

	return (
		<div className="flex-row justify-center">
			<div className="flex-row justify-center col-12">
				<div className="flex-row justify-space-between col-12 col-sm-8 col-md-8 col-lg-7">
					<div className="pfp-container">
						<div className="pfp" style={profilePicStyle}></div>
						<Edit
							id="upload_widget"
							className="account-edit-icon "
							onClick={handleOpenWidget}
						/>
					</div>
					<div className="flex-row align-center col-6">
						<h3 className="col-12 text-center">
							{userInfo.firstName} {userInfo.lastName}
						</h3>
						<p className="member-since text-center col-12">
							Member since <br></br> {userInfo.createdAt}
						</p>
					</div>
				</div>
				<div className="flex-row margin-top col-12 col-sm-8 col-md-8 col-lg-7">
					<p className="col-12">About:</p>
					<div className="info-container about-container col-12">
						<p>{userInfo.bio}</p>
					</div>
				</div>
				<div className="flex-row margin-top col-12 col-sm-8 col-md-8 col-lg-7">
					<p className="col-12">Email:</p>
					<div className="info-container col-12">
						<p>{userInfo.email}</p>
					</div>
				</div>
				<div className="flex-row margin- col-12 col-sm-8 col-md-8 col-lg-7">
					<p className="col-12">Phone:</p>
					<div className="info-container col-12">
						<p>{userInfo.phone}</p>
					</div>
				</div>
			</div>
			<div className="btn-container margin-top">
				<Link to="/edit-account">
					<button className="btn btn-long">Edit</button>
				</Link>
			</div>
		</div>
	);
};
export default Account;
