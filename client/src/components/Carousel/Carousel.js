import React, { useState } from "react";
import "./Carousel.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function Carousel(props) {
  const [currImg, setCurrImg] = useState(0);
  // const [hasImages, setHasImages] = useState(true);
  const { campsite } = props;
  const imagesArray = [...campsite.images];

  if (!imagesArray.length) {
    return (
      <div className="carousel">
        <div
          className="carouselInner"
          style={{
            backgroundColor: "var(--light-green)",
          }}
        >
          <div
            className="left carouselArrow"
            onClick={() => {
              currImg > 0 && setCurrImg(currImg - 1);
            }}
          >
            <ArrowBackIosIcon />
          </div>
          <div className="center">
            <BookmarkBorderIcon className="save" style={{ fontSize: 30 }} />
            <h1 className="rate">${campsite.price}</h1>
          </div>
          <div
            className="right carouselArrow"
            onClick={() => {
              currImg < imagesArray.length - 1 && setCurrImg(currImg + 1);
            }}
          >
            <ArrowForwardIosIcon />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/dxs0geixs/image/upload/c_scale,w_150/v1663797068/${imagesArray[currImg]})`,
        }}
      >
        <div
          className="left carouselArrow"
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1);
          }}
        >
          <ArrowBackIosIcon />
        </div>
        <div className="center">
          <BookmarkBorderIcon className="save" style={{ fontSize: 30 }} />
          <h1 className="rate">${campsite.price}</h1>
        </div>
        <div
          className="right carouselArrow"
          onClick={() => {
            currImg < imagesArray.length - 1 && setCurrImg(currImg + 1);
          }}
        >
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  );
}
export default Carousel;
