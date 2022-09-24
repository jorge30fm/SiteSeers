import React from "react";
import Carousel from "../Carousel/Carousel.js";
import "./ListingCard.css";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";

const ListingCard = (props) => {
	const { campsite } = props;
	const navigate = useNavigate();
	const handleClickCampsite = () => {
		navigate(`/single-site/${campsite._id}`);
	};

	if (props.singleReservation) {
		const handleClickReservation = () => {
			navigate(`/reservation-details/${props.singleReservation._id}`);
		};
		return (
			<div className="listingCard">
				<Carousel campsite={campsite}></Carousel>

				<div className="basicInfo" onClick={handleClickReservation}>
					<h2 className="capitalize">{campsite.name}</h2>
					<h3 className="location">
						{campsite.city}, {campsite.state}
					</h3>
				</div>
			</div>
		);
	} else {
		return (
			<div className="listingCard">
				<Carousel campsite={campsite}></Carousel>

				<div className="basicInfo" onClick={handleClickCampsite}>
					<h2 className="capitalize">{campsite.name}</h2>
					<h3 className="location">
						{campsite.city}, {campsite.state}
					</h3>
				</div>
			</div>
		);
	}
};
export default ListingCard;
