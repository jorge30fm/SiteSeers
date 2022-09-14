import React, { useState } from "react";
import "./Carousel.css";
import camping1 from "../../assets/campImages/camping1.jpg";
import camping2 from "../../assets/campImages/camping2.jpg";
import camping3 from "../../assets/campImages/camping3.jfif";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const images = [{ img: camping1 }, { img: camping2 }, { img: camping3 }];

function Carousel() {
  const [currImg, setCurrImg] = useState(0);

  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[currImg].img})` }}
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
          <h1 className="rate">$75</h1>
        </div>
        <div
          className="right carouselArrow"
          onClick={() => {
            currImg < images.length - 1 && setCurrImg(currImg + 1);
          }}
        >
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  );
}
export default Carousel;
