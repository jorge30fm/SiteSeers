import React from "react";
import "./ListingForm.css";

const ListingForm = () => {
  return (
    <div>
      <form className="flex-column">
        <div className="flex-column margin-top">
          <label>Camp Site Name:</label>
          <p className="label-desc">Name your campsite!</p>
          <input></input>
        </div>
        <div className="flex-column margin-top">
          {/* TODO: add address auto suggest */}
          <label>Location/Address:</label>
          <p className="label-desc"></p>
          <input></input>
        </div>
        <div className="flex-column margin-top">
          <label>Pictures:</label>
          <p className="label-desc">Add pictures to show off the site! (optional)</p>
          <input type="file"></input>
        </div>
        <div className="flex-column">
          {/* <div className="flex-row"> */}
            <div className="flex-column margin-top">
              <label>Phone:</label>
              <input type="phone"></input>
            </div>
            <div className="flex-column margin-top">
              <label>Email:</label>
              <input type="email"></input>
            </div>
          {/* </div> */}
          <div className="flex-column margin-top">
            <label>Host Bio:</label>
            <p className="label-desc">Tell your campers a little about yourself!</p>
            <input></input>
          </div>
        </div>
        <div className="flex-column margin-top">
          <label>Check-In Info:</label>
          <p className="label-desc">Let your campers know how to check in.</p>
          <input></input>
        </div>
        <div className="flex-column margin-top">
          <label>Rules:</label>
          <p className="label-desc">Tell your campers what rules your site has!</p>
          <input></input>
        </div>
        <div className="flex-column margin-top">
          <label>Amenties:</label>
          <input></input>
        </div>
        <div className="flex-column margin-top">
          <label>Rate:</label>
          <input></input>
        </div>
        <div className="flex-column margin-top">
          <label>Availabilty:</label>
          <input></input>
        </div>
        <div className="flex-column margin-top">
          <label>Description:</label>
          <p className="label-desc"></p>
          <input></input>
        </div>
        <div className="btn-container margin-top">
          <button className="btn">Save Listing</button>
        </div>
      </form>
    </div>
  );
};
export default ListingForm;
