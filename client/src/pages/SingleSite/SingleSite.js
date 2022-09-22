import React from "react";
import "./SingleSite.css";

import Auth from "../../utils/auth";
import { Navigate, Link, useParams } from "react-router-dom";

import Carousel from "../../components/Carousel/Carousel";

import StarIcon from "@mui/icons-material/Star";
import AmenitiesDisplay from "../../components/AmenitiesDisplay/AmenitiesDisplay";
// parking   - PARKING
// wheelchairAccessible - ACCESSIBLEICON
// petAllowed    - PETSICON
// toilets    - WcICON
// campfire    - FIRE
// water       -WATERICON
// showers   - SHOWER
// trash     -DELETEICON
// hotTub     -HOTTUB
// picnicTable    -TABLERESTAURANTICON
// wifi - WIFIICON
// cookingEquipment   - GRILL

import { QUERY_CAMPSITE } from "../../utils/queries";
import { useQuery } from "@apollo/client";

const SingleSite = () => {
	const { id: _id } = useParams();

	// if (!Auth.loggedIn()) {
	// 	return <Navigate to="/login" />;
	// }
	const { loading, data } = useQuery(QUERY_CAMPSITE, {
		variables: { _id: _id },
	});
	const campsite = data?.campsites[0] || {};
	if (loading) {
		return <div>Loading...</div>;
	}
	console.log(campsite);
	return (
		<main>
			<Carousel campsite={campsite} />
			<div className="singlesite-section">
				<section>
					<StarIcon />
					<StarIcon />
					<StarIcon />
					<StarIcon />
					<StarIcon />
				</section>
				<section>
					<h2>{campsite.name}</h2>
					<h3>
						{campsite.city}, {campsite.state}
					</h3>
				</section>
				<AmenitiesDisplay campsite={campsite} />
				<section>
					<h3>Description</h3>
					<p>{campsite.description}</p>
				</section>
				<div className="btn-container">
					<Link to="/reserve">
						<button className="btn">Reserve</button>
					</Link>
				</div>
			</div>
		</main>
	);
};

export default SingleSite;
