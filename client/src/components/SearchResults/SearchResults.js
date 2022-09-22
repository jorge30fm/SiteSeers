import React, { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CAMPSITE } from "../../utils/queries";
import ListingCard from "../../components/ListingCard/ListingCard";

function SearchResults(props) {
  const { searchState } = props;
  const [getData, setGetData] = useState({});

  const [queryCampsite, { error }] = useLazyQuery(QUERY_CAMPSITE);

  useEffect(() => {
    console.log(searchState);
    if (searchState === "") {
      return;
    }
    const fetchData = async () => {
      console.log("SEARCHSTATE", searchState);
      try {
        const { data } = await queryCampsite({
          variables: { city: searchState },
        });
        setGetData(data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [searchState]);

  const campsiteArray = getData.campsites;
  console.log(campsiteArray);
  // if (!resultsArray.length) {
  //   return <p>Nothing here</p>;
  // }

  if (!campsiteArray) {
    return <div></div>;
  }

  return (
    <div>
      <div>
        {campsiteArray.map((campsite) => (
          <div key={campsite._id}>{campsite.name}</div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;

// resultsArray.forEach((campsite) => {
//   console.log(campsite);
// });
