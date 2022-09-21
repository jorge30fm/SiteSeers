import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CAMPSITE } from "../../utils/queries";

import Auth from "../../utils/auth";
import { Navigate } from "react-router-dom";

import SearchBar from "../../components/SearchBar/SearchBar";
import ListingCard from "../../components/ListingCard/ListingCard";

function SearchPage() {
  const [searchValue, setSearchValue] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);
  const [getCampsites, { loading, data }] = useLazyQuery(QUERY_CAMPSITE);

  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }

  if (loading) return <p>Loading ...</p>;

  if (data) {
    console.log(data);
  }

  console.log(searchValue);

  // console.log(data);
  // const siteInfo = data?.campsites || {};
  // console.log(siteInfo);

  return (
    <main>
      <SearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
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
