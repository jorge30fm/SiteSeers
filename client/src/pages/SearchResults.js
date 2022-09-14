import React from "react";
import SearchBar from "../components/SearchBar";
import ListingCard from "../components/ListingCard/ListingCard.js";

function SearchPage() {
  return (
    <main>
      <SearchBar></SearchBar>
      <section>
        <ListingCard />
      </section>
    </main>
  );
}

export default SearchPage;
