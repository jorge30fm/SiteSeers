import React, { useState } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import { QUERY_CAMPSITE } from "../../utils/queries";

function SearchBar() {
  // const [searchState, setSearchState] = useState("");

  // const [getSearchResults, { loading, data }] = useLazyQuery(QUERY_CAMPSITE, {
  //   variables: { name: searchState },
  // });

  // console.log("GET SEARCH RESULTS", getSearchResults);

  // const [errorMessage, setErrorMessage] = useState("");

  // const handleChange = (e) => {
  //   setSearchState(e.target.value);
  //   console.log("Handle Change", e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!errorMessage) {
  //     console.log("Handle Submit", searchState);
  //     setSearchState(e.target.value);
  //   } else {
  //     setErrorMessage("Please try another search");
  //   }
  // };

  let searchValue;

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchbar = document.querySelector("#search-bar");
    const newSearchValue = searchbar.value;
    searchValue = newSearchValue;
    console.log("searchValue", searchValue);
  };

  const { loading, data } = useQuery(QUERY_CAMPSITE, {
    variables: { searchValue },
  });

  const siteInfo = data?.campsites || {};
  console.log("SITEINFO", siteInfo);

  return (
    <section className="mountain-bg">
      <form action="/action_page.php" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Find a New Adventure"
          name="search"
          id="search-bar"
        />
        <button type="submit" className="btn">
          <i className="search">Find</i>
        </button>
      </form>
    </section>
  );
}

export default SearchBar;
