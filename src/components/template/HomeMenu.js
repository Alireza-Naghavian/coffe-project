import React from "react";
import ProductCard from "../sharedUi/ProductCard";

function HomeMenu({ menuProd }) {
  const coldType = [...menuProd]?.filter((coffee) => coffee?.type === "cold");
  const hotType = [...menuProd]?.filter((coffee) => coffee?.type === "hot");
  return (
    <div className="container mx-auto px-20 mt-32">
      <div className="section-title">
        <h4
          className="text-primary uppercase text-4xl"
          style={{ letterSpacing: "5px" }}
        >
          Menu &amp; Pricing
        </h4>
        <h1 className="text-[2.7rem] text-center font-bold">
          Competitive Pricing
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {/* hot coffee */}
        <div className="grid grid-cols-1 gap-y-8">
          <h1 className="mb-5 text-4xl font-bold">Hot Coffee</h1>
          {coldType.slice(0, 3).map((coffee) => {
            return <ProductCard key={coffee.id} coffee={coffee} />;
          })}
        </div>
        {/* cold coffee */}
        <div className="grid grid-cols-1 gap-y-8">
          <h1 className="mb-5 text-4xl font-bold">Cold Coffee</h1>
          {hotType.slice(0, 3).map((coffee) => {
            return <ProductCard key={coffee.id} coffee={coffee} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default HomeMenu;
