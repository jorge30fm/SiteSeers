import React from "react";

import "./AddListing.css";
import Auth from "../../utils/auth.js";
import { Navigate } from "react-router-dom";

import ListingForm from "../../components/ListingForm/ListingForm.js";

const AddListing = () => {
	if (!Auth.loggedIn()) {
		return <Navigate to="/login" />;
	}

	return (
		<main className="padding">
			<h2>Add a Listing</h2>
			<ListingForm />
		</main>
	);
};
export default AddListing;
