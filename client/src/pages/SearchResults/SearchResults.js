import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CAMPSITE } from "../../utils/queries";

import Auth from "../../utils/auth";
import { Navigate } from "react-router-dom";

import SearchBar from "../../components/SearchBar/SearchBar";
import ListingCard from "../../components/ListingCard/ListingCard";

function SearchPage() {
  const [searchState, setSearchState] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);
  // const [getCampsites, { loading, data }] = useLazyQuery(QUERY_CAMPSITE);
  const [findCampSites, { loading, data, error }] = useLazyQuery(
    QUERY_CAMPSITE,
    {
      variables: { location: searchState },
    }
  );

  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }

  if (loading) return <p>Loading ...</p>;

  if (data) {
    console.log(data);
  }

  if (searchClicked) {
    findCampSites(searchState);
    console.log(searchState);
    setSearchClicked(false);
  }

  // console.log(data);
  // const siteInfo = data?.campsites || {};
  // console.log(siteInfo);

  return (
    <main>
      <SearchBar
        searchState={searchState}
        setSearchState={setSearchState}
        searchClicked={searchClicked}
        setSearchClicked={setSearchClicked}
      ></SearchBar>
      <section>
        <ListingCard />
      </section>
    </main>
  );
}

export default SearchPage;
