import React, { useState } from "react";

import Auth from "../../utils/auth";
import { Navigate } from "react-router-dom";

import SearchBar from "../../components/SearchBar/SearchBar";
import SearchResults from "../../components/SearchResults/SearchResults";

function SearchPage() {
  const [searchState, setSearchState] = useState("");

  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }

  return (
    <main>
      <SearchBar
        setSearchState={setSearchState}
      ></SearchBar>
      <section>
        <SearchResults searchState={searchState}></SearchResults>
      </section>
    </main>
  );
}

export default SearchPage;
