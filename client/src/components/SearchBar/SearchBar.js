import React from "react";

function SearchBar(props) {
<<<<<<< HEAD
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
  const [findCampSites, { loading, data, error }] = useLazyQuery(
    QUERY_CAMPSITE,
    {
      variables: { location: searchState },
    }
  );
  const campsitesArray = data;
  console.log("campsites Array", campsitesArray);
  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("EVENT", event.target);
    setSearchState(value);
    console.log(event);
  };
=======
  const { setSearchState } = props;
>>>>>>> develop

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
