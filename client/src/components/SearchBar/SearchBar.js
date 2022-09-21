import { useLazyQuery } from "@apollo/client";
import React, { useState } from "react";
import { QUERY_CAMPSITE } from "../../utils/queries";
// import { useQuery } from "@apollo/client";
// import { QUERY_CAMPSITE } from "../../utils/queries";

function SearchBar(props) {
  const [searchState, setSearchState] = useState(
    // _id: "",
    // name: "",
    // location: "",
    // price: "",
    // active: "",
    // description: "",
    // reviewCount: "",
    // campsiteReview: "",
    ""
  );
  const [findCampSites, { error }] = useLazyQuery(QUERY_CAMPSITE, {
    variables: { location: searchState },
  });

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("EVENT", event.target);
    setSearchState(value);
    console.log(event);
  };

  // submit form
  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchState(document.querySelector("#search-bar").value);
    findCampSites(searchState);
  };

  return (
    <section className="mountain-bg">
      <form action="/action_page.php" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Find a New Adventure"
          name="search"
          id="search-bar"
          onSubmit={handleChange}
        />
        <button type="submit" id="search-btn" className="btn">
          Search
        </button>
      </form>
    </section>
  );
}

export default SearchBar;
