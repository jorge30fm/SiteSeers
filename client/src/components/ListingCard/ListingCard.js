import React from "react";
import Carousel from "../Carousel/Carousel";
import "./ListingCard.css";
import StarIcon from "@mui/icons-material/Star";
const ListingCard = (props) => {
<<<<<<< HEAD
  // const { campsite } = props;
  return (
    <div className="listingCard">
      {/* TODO: On click, redirect to single campsite page */}
      <Carousel></Carousel>
=======
  const { siteData } = props;
  return (
    <div className="listingCard">
      <Carousel siteData={siteData}></Carousel>
>>>>>>> 287ff6a9655403ada5b09ce48148453e01a5b693
      <div className="basicInfo">
        <h2>Name</h2>
        <h3 className="location">City, State</h3>
      </div>
    </div>
  );
};
export default ListingCard;
