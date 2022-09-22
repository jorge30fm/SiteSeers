import React from "react";
import Carousel from "../Carousel/Carousel";
import "./ListingCard.css";
import StarIcon from "@mui/icons-material/Star";
const ListingCard = (props) => {
  // const { campsite } = props;
  return (
    <div className="listingCard">
      {/* TODO: On click, redirect to single campsite page */}
      <Carousel></Carousel>
      <div className="basicInfo">
        <h2>Name</h2>
        <h3 className="location">City, State</h3>
      </div>
    </div>
  );
};
export default ListingCard;
