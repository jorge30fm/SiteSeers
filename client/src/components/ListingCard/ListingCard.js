import React from "react";
import Carousel from "../Carousel/Carousel";
import "./ListingCard.css";
import StarIcon from "@mui/icons-material/Star";
const ListingCard = (props) => {
  const { campsite } = props;
  return (
    <div className="listingCard">
      {/* TODO: On click, redirect to single campsite page */}
      <Carousel campsite={campsite}></Carousel>
      <div className="basicInfo">
        <h2>{campsite.name}</h2>
        <h3 className="location">
          {campsite.city}, {campsite.state}
        </h3>
      </div>
    </div>
  );
};
export default ListingCard;
