import React from "react";
import { Navigate, Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import Auth from "../../utils/auth";
import { QUERY_CAMPSITE } from "../../utils/queries";
import "./SingleSite.css";

import Carousel from "../../components/Carousel/Carousel";
import StarIcon from "@mui/icons-material/Star";
import Grill from "@mui/icons-material/OutdoorGrill";
import Fire from "@mui/icons-material/Fireplace";
import Shower from "@mui/icons-material/Shower";
import Power from "@mui/icons-material/Power";

const SingleSite = () => {
  const { id: siteId } = useParams();

  const { loading, data } = useQuery(QUERY_CAMPSITE, {
    variables: { id: siteId },
  });

  const siteInfo = data?.campsites[0] || {};

  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(siteInfo.amenities);

  return (
    <main>
      <Carousel />
      <div className="singlesite-section">
        <section>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </section>
        <section>
          <h2>{siteInfo.name}</h2>
          <h3>{siteInfo.location}</h3>
        </section>
        {/* ================================ */}
        <section>
          <h3>Amenties</h3>
          <div>
            <Grill />
            <Fire />
            <Shower />
            <Power />
          </div>
        </section>
        {/* ================================ */}
        <section>
          <h3>Description</h3>
          <p>
            {siteInfo.description}
          </p>
        </section>
        <div className="btn-container">
          <Link to="/reserve">
            <button className="btn">Reserve</button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default SingleSite;
