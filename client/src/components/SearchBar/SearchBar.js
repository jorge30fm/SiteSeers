import React, { useState } from "react";
// import { useQuery } from "@apollo/client";
// import { QUERY_CAMPSITE } from "../../utils/queries";

function SearchBar(props) {
  const { setSearchValue } = props;
  const { setSearchClicked } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchBar = document.querySelector("#search-bar");
    const newSearchValue = searchBar.value;
    setSearchClicked(true);
    setSearchValue(newSearchValue);
  };

  // const { loading, data } = useQuery(QUERY_CAMPSITE);
  // console.log(data);
  // const siteInfo = data?.campsites || {};
  // w;
  // console.log(siteInfo);

  return (
    <section className="mountain-bg">
      <form action="/action_page.php" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Find a New Adventure"
          name="search"
          // onChange={handleChange}
          // defaultValue={search}
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
