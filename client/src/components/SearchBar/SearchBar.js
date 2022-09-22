import React from "react";
import "./SearchBar.css";

function SearchBar(props) {
  const { setSearchState } = props;

  // submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchState(document.querySelector("#search-bar").value);
  };

  return (
    <section className="mountain-bg">
      <form className="search-form flex-row align-center">
        <input
          type="text"
          placeholder="Find a New Adventure"
          name="search"
          id="search-bar"
        />
        <div className="btn-container">
          <button
            type="submit"
            id="search-btn"
            className="btn"
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>
      </form>
    </section>
  );
}

export default SearchBar;
