import React from "react";
import "./Reviews.css";
import reviewData from "./reviewdata.js";
// import ListingCard from "../../ListingCard/ListingCard";

const Reviews = () => {
  return (
    <div>
      <h3>Reviews</h3>
      {/* <a className="wrapper-link" href="/reservation-details"></a> */}
      {reviewData &&
        reviewData.map((review) => (
          <div key={review._id}>
            <h5>{review.campsite}</h5>
            <p>Rating: {review.rating}</p>
            <p>{review.reviewText} <span className="date-style">{Date(review.createdAt)}</span></p>
            <br></br>
          </div>
        ))}
    </div>
  );
};
export default Reviews;
