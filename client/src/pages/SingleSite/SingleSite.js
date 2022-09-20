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
  const { loading, data } = useQuery(QUERY_CAMPSITE);
  const siteInfo = data?.campsite || {};
  const { id: siteId } = useParams();

  console.log(siteId);

  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(siteInfo);

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
          <h2>Site Name</h2>
          <h3>Location</h3>
        </section>
        <section>
          <h3>Amenties</h3>
          <div>
            <Grill />
            <Fire />
            <Shower />
            <Power />
          </div>
        </section>
        <section>
          <h3>Description</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
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
