import React from "react";
import "./CancelConfirm.css";
import CheckCircle from "@mui/icons-material/CheckCircleOutline";

const CancelConfirm = () => {
  return (
    <main className="flex-column align-center justify-center padding">
      <h2>Success!</h2>
      <div className="padding">
      <CheckCircle style={{ fontSize: "100px" }} />
      </div>
      <p className="centered-text">Your reservation was successfully cancelled.</p>
    </main>
  );
};
export default CancelConfirm;
