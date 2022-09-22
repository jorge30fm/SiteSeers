import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <main className="padding">
      <h2>Oops! That page doesn't exist.</h2>
      <Link to="/"><p className="link-style margin-top">Try going to your dashboard.</p></Link>
    </main>
  );
};
export default NotFound;
