import React from "react";
import "./CancelConfirm.css";

import Auth from "../../utils/auth";
import { Navigate } from "react-router-dom";

import CheckCircle from "@mui/icons-material/CheckCircleOutline";

const CancelConfirm = () => {
  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }

  return (
    <main className="flex-column align-center justify-center padding">
      <h2>Success!</h2>
      <div className="padding">
        <CheckCircle style={{ fontSize: "100px" }} />
      </div>
      <p className="centered-text">
        Your reservation was successfully cancelled.
      </p>
    </main>
  );
};
export default CancelConfirm;
