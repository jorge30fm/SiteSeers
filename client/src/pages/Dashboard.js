import React from "react";
import ListingCard from "../components/ListingCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <div className="container">
      <Header />
      <ListingCard />
      <Footer />
    </div>
  );
};
export default Dashboard;
