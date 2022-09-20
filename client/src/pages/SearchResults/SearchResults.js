import React from "react";

import Auth from "../../utils/auth";
import { Navigate, Link } from "react-router-dom";

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
        <Link to="/single-site">
          <ListingCard />
        </Link>
      </section>
    </main>
  );
}

export default SearchPage;
