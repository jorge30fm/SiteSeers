import { useLazyQuery } from "@apollo/client";
import React, { useState } from "react";
import { QUERY_CAMPSITE } from "../../utils/queries";

function SearchBar(props) {
  const { setSearchState } = props;

  // submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchState(document.querySelector("#search-bar").value);
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
