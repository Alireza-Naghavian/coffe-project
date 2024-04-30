import React from "react";
import ProductCard from "../sharedUi/ProductCard";

function SearchResult({ searchResult }) {
  return (
    <div className="container mx-auto px-20 mt-32">
      <div className="  gap-6">
        <h1 className="mb-5 w-full text-4xl font-bold">search results:</h1>
        <div className="grid grid-cols-2 gap-y-4">
          {searchResult.map((coffee) => {
            return <ProductCard key={coffee.id} coffee={coffee} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
