import React, { useState } from "react";

function SearchBar() {
  const [searchState, setSearchState] = useState({ search: "" });

  const [errorMessage, setErrorMessage] = useState("");
  const { search } = searchState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
    }
    console.log("Search Bar", searchState);
  };

  return (
    <section className="mountain-bg">
      <form action="/action_page.php" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Find a New Adventure"
          name="search"
          defaultValue={search}
        />
        <button type="submit" className="searchButton">
          <i className="search">Find</i>
        </button>
      </form>
    </section>
  );
}

export default SearchBar;
