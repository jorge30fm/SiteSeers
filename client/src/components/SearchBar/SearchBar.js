import React from "react";

function SearchBar(props) {
  const { setSearchState } = props;

  // submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchState(document.querySelector("#search-bar").value);
  };

  return (
    <section className="mountain-bg">
      <form>
        <input
          type="text"
          placeholder="Find a New Adventure"
          name="search"
          id="search-bar"
        />
        <button
          type="submit"
          id="search-btn"
          className="btn"
          onClick={handleSubmit}
        >
          Search
        </button>
      </form>
    </section>
  );
}

export default SearchBar;
