import React, { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CAMPSITE } from "../../utils/queries";
// import ListingCard from "../../components/ListingCard/ListingCard";

function SearchResults(props) {
  const { searchState } = props;

  const [queryCampsite, { error }] = useLazyQuery(QUERY_CAMPSITE);

  let resultsArray;

  useEffect(() => {
    if (searchState === "") {
      return;
    }
    const fetchData = async () => {
      console.log("SEARCHSTATE", searchState);
      try {
        const { data } = await queryCampsite({
          variables: { city: searchState },
        });
        resultsArray = data?.campsites || {};
        if (!resultsArray.length) {
          return <p>Nothing here</p>;
        }
        resultsArray.forEach((campsite) => {
          console.log("CAMPSITE.NAME", campsite.name);
        });
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [searchState]);

  return (
    <div>
      <div> </div>
    </div>
  );
}

export default SearchResults;
