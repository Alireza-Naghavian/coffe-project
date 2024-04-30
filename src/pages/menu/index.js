import HeaderPage from "@/components/sharedUi/HeaderPage";
import MainMenu from "@/components/template/MainMenu";
import axios from "axios";
import React from "react";

function Menu_page({ menuProd }) {
  return (
    <>
      <HeaderPage route={"menu"} />
      <MainMenu menuProd={menuProd} />
    </>
  );
}

export default Menu_page;
export async function getStaticProps() {
  const { data: menuProd } = await axios.get("http://localhost:4000/menu");
  console.log(menuProd);
  return {
    props: {
      menuProd,
    },
    revalidate: 60 * 60 * 4,
  };
}
