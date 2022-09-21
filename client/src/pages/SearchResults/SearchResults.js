import React, { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CAMPSITE } from "../../utils/queries";

import Auth from "../../utils/auth";
import { Navigate } from "react-router-dom";

import SearchBar from "../../components/SearchBar/SearchBar";
import ListingCard from "../../components/ListingCard/ListingCard";

function SearchPage() {
  const [searchState, setSearchState] = useState("");

  const [findCampSites, { loading, data, error }] = useLazyQuery(
    QUERY_CAMPSITE,
    {
      variables: { city: searchState },
    }
  );

  useEffect(() => {
    if (searchState === "") {
      return;
    }
    console.log(searchState);
    findCampSites({ variables: { city: searchState } });
    const siteInfo = data?.campsite || {};
    console.log(siteInfo);
  }, [searchState, findCampSites]);

  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }

  if (loading) return <p>Loading ...</p>;

  if (data) {
    console.log(data);
  }

  return (
    <main>
      <SearchBar
        searchState={searchState}
        setSearchState={setSearchState}
      ></SearchBar>
      <section>
        <ListingCard />
      </section>
    </main>
  );
}

export default SearchPage;
