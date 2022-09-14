import React from "react";
import Carousel from "../Carousel/Carousel";
import "./ListingCard.css";
import StarIcon from "@mui/icons-material/Star";
const ListingCard = () => {
  return (
    <div className="listingCard">
      {/* TODO: On click, redirect to single campsite page */}
      <Carousel />
      <div className="basicInfo">
        <div>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
        <h2>Name</h2>
        <h3 className="location">Location</h3>
      </div>
    </div>
  );
};
export default ListingCard;
