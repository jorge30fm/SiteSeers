import React, { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CAMPSITE } from "../../utils/queries.js";
import ListingCard from "../../components/ListingCard/ListingCard.js";

function SearchResults(props) {
  const { searchState } = props;
  const [getData, setGetData] = useState({});
  const [siteData, setSiteData] = useState({
    price: "string",
    city: "",
    state: "",
    images: "",
    _id: "",
    name: "",
  });

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

  // const siteDataArray = campsiteArray.map((campsite) => {});

  return (
    <div className="padding">
      <h2>Search Results</h2>
      <div className="margin-top">
        {campsiteArray.map((campsite) => (
          <ListingCard key={campsite._id} campsite={campsite}></ListingCard>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;

// resultsArray.forEach((campsite) => {
//   console.log(campsite);
// });
