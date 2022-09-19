import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { QUERY_USER_LISTINGS_BASIC } from "../../utils/queries";

function SearchBar() {
  const [searchState, setSearchState] = useState({ search: "" });

  const [getSearchResults, { loading, data }] = useLazyQuery(
    QUERY_USER_LISTINGS_BASIC,
    {
      variables: { name: searchState },
    }
  );

  const [errorMessage, setErrorMessage] = useState("");
  const { search } = searchState;

  const handleChange = (e) => {
    setSearchState(e.target.value);
    console.log("Handle Change", e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Handle Submit", searchState);

      // console.log("CLIENT", client)
      // client.query({ query: QUERY_USER_INFO }).then((results) => {
      //   console.log("ANSWER FOR QUERY", results);
      // });
    } else {
      setErrorMessage("Please try another search");
    }
  };

  return (
    <section className="mountain-bg">
      <form action="/action_page.php" onSubmit={getSearchResults}>
        <input
          type="text"
          placeholder="Find a New Adventure"
          name="search"
          onChange={handleChange}
          defaultValue={search}
          id="searchBarValue"
        />
        <button type="submit" className="btn" onSubmit={handleSubmit}>
          <i className="search">Find</i>
        </button>
      </form>
    </section>
  );
}

export default SearchBar;
