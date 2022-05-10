import React, { useState } from "react";
import { SearchForm } from "../components/SearchForm";
import { SearchResults } from "../components/SearchResults";

function Search() {
  const [first, setFirst] = useState(0);
  return (
    <>
      <SearchForm setFirst={setFirst} />
      <SearchResults first={first} setFirst={setFirst} />
    </>
  );
}

export { Search };
