import React, { useState } from "react";

function SearchBar() {
  const [searchState, setSearchState] = useState({ search: "" });

  const [errorMessage, setErrorMessage] = useState("");
  const { search } = searchState;

  const handleChange = (e) => {
    setSearchState(e.target.value);
    console.log("Handle Change", e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Search Bar", e);
    } else {
      setErrorMessage("Please try another search");
    }
  };

  return (
    <section className="mountain-bg">
      <form action="/action_page.php" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Find a New Adventure"
          name="search"
          onChange={handleChange}
          defaultValue={search}
        />
        <button type="submit" className="searchButton btn">
          <i className="search">Find</i>
        </button>
      </form>
    </section>
  );
}

export default SearchBar;
