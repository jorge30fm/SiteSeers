import React from "react";
import "./Reviews.css";
import reviewData from "./reviewdata.js";
// import { Link } from "react-router-dom";
// import ListingCard from "../../ListingCard/ListingCard";

const Reviews = () => {
  return (
    <div>
      <h3>Reviews</h3>
      {reviewData &&
        reviewData.map((review) => (
          <div key={review._id}>
            <img src={review.image} className="img" alt='campsite'></img>
            <h5>{review.campsite}</h5>
            <p>Rating: {review.starIcon}</p>
            <p>
              {review.reviewText}{" "}
              <span className="date-style">{Date(review.createdAt)}</span>
            </p>
            <br></br>
          </div>
        ))}
    </div>
  );
};
export default Reviews;
