import { Route } from "react-router-dom";
import React, { useEffect } from "react";

import SearchResults from "./search-results";

// For restoring scroll position when component is unmounted
let searchScrollPosition = null;

const SearchPage = () => {
  useEffect(() => {
    if (searchScrollPosition) {
      document.querySelector("html").scrollTop = searchScrollPosition;
    }
    return () =>
      (searchScrollPosition = document.querySelector("html").scrollTop);
  }, []);

  return (
    <>
      <Route exact path="/app/search" render={() => <h1>Search Page</h1>} />
      <Route exact path="/app/search/:query" component={SearchResults} />
    </>
  );
};

export default SearchPage;
