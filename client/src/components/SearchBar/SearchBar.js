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
    const searchBarValue = document.querySelector("#searchBarValue").value;
    if (!errorMessage) {
      console.log("Handle Submit", searchBarValue);
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
          id="searchBarValue"
        />
        <button type="submit" className="searchButton">
          <i className="search">Find</i>
        </button>
      </form>
    </section>
  );
}

export default SearchBar;
