import React from "react";

import Auth from "../../utils/auth";
import { Navigate } from "react-router-dom";

import SearchBar from "../../components/SearchBar/SearchBar";
import ListingCard from "../../components/ListingCard/ListingCard";

function SearchPage() {
  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }

  return (
    <main>
      <SearchBar></SearchBar>
      <section>
        <ListingCard />
      </section>
    </main>
  );
}

export default SearchPage;
