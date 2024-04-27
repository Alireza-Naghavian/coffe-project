import React from "react";
import { Button } from "@nextui-org/react";
function Offer() {
  return (
    <div className="offer mx-auto w-full mt-12 my-6 py-6 text-center relative overlay-top overlay-bottom">
      <h1 className="text-[4.5rem] text-primary mt-3">50% OFF</h1>
      <h1 className="text-white mb-3">Sunday Special Offer</h1>
      <h4 className="text-white font-normal mb-4 pb-3">
        Only for Sunday from 1st Jan to 30th Jan 2045
      </h4>
      <form className="form-inline flex justify-center  mb-4">
        <div className="input-group flex ">
          <input
            type="text"
            className="form-control p-4"
            placeholder="Your Email"
            style={{ height: "60px" }}
          />

          <Button className="rounded-none h-[60px] uppercase text-white bg-primary font-bold text-lg">
            join
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Offer;
