import React from "react";
import Carousel from "../Carousel/Carousel";
import "./ListingCard.css";
import StarIcon from "@mui/icons-material/Star";
const ListingCard = (props) => {
  const { siteData } = props;
  return (
    <div className="listingCard">
      <Carousel siteData={siteData}></Carousel>
      <div className="basicInfo">
        <h2>Name</h2>
        <h3 className="location">Location</h3>
      </div>
    </div>
  );
};
export default ListingCard;
