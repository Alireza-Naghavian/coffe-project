import HeaderPage from "@/components/sharedUi/HeaderPage";
import SearchResult from "@/components/template/SearchResult";
import axios from "axios";
import React from "react";

function SearchPage({searchResult}) {
  return (
    <>
      <HeaderPage route={`search`} />
      <SearchResult searchResult={searchResult} />
    </>
  );
}

export default SearchPage;
export async function getServerSideProps(context) {
  const { data: result } = await axios.get("http://localhost:4000/menu");
  const { query } = context;
  const searchResult = result.filter((item) => {
    return (
      item.type.toLowerCase().includes(query.q.toLowerCase()) ||
      item.title.toLowerCase().includes(query.q.toLowerCase())
    );
  });
  return {
    props: {
      searchResult
    },
  };
}
