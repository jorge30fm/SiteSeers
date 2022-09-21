import { useLazyQuery } from "@apollo/client";
import React, { useState } from "react";
import { QUERY_CAMPSITE } from "../../utils/queries";

function SearchBar(props) {
  const { searchState, setSearchState, searchClicked, setSearchClicked } =
    props;
  const [findCampSites, { loading, data, error }] = useLazyQuery(
    QUERY_CAMPSITE,
    {
      variables: { location: searchState },
    }
  );

  // submit form
  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchState(document.querySelector("#search-bar").value);
    setSearchClicked(true);
    console.log(searchClicked);
    findCampSites(searchState);
    // setTimeout(setSearchClicked(false), 2000);
    // console.log(searchClicked);
  };

  return (
    <section className="mountain-bg">
      <form action="/action_page.php" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Find a New Adventure"
          name="search"
          id="search-bar"
        />
        <button type="submit" id="search-btn" className="btn">
          Search
        </button>
      </form>
    </section>
  );
}

export default SearchBar;
