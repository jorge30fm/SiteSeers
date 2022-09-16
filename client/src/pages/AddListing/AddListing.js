import React from "react";
import "./AddListing.css";
import ListingForm from "../../components/ListingForm/ListingForm";

const AddListing = () => {
  return (
    <main className="padding">
      <h2>Add a Listing</h2>
      <ListingForm />
    </main>
  );
};
export default AddListing;
