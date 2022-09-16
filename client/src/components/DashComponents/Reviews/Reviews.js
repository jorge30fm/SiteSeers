import React from "react";
import "./Review.css";
import reviewData from "./reviewdata.js";
// import ListingCard from "../../ListingCard/ListingCard";

const Reviews = () => {
  return (
    <div>
      <h3 className="dash-reserve-title">Reviews</h3>
      {/* <a className="wrapper-link" href="/reservation-details"></a> */}
      {reviewData &&
        reviewData.map((review) => (
          <div key={review._id}>
            <h5>{review.campsite}</h5>
            <p>Rating: {review.rating}</p>
            <p><span>{review.reviewText}</span></p>
            <br></br>
          </div>
        ))}
    </div>
  );
};
export default Reviews;
