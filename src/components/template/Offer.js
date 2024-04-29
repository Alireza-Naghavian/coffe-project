import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import axios from "axios";
function Offer() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newsLetterData = {
      id: new Date().getTime(),
      email,
    };
    if (!email) return;
    const data = await axios.post("http://localhost:4000/newsletters", {
      ...newsLetterData,
    });
    if (data.status === 201) setEmail("");
  };
  return (
    <div className="offer mx-auto w-full mt-12 my-6 py-6 text-center relative overlay-top overlay-bottom">
      <h1 className="text-[4.5rem] text-primary mt-3">50% OFF</h1>
      <h1 className="text-white mb-3">Sunday Special Offer</h1>
      <h4 className="text-white font-normal mb-4 pb-3">
        Only for Sunday from 1st Jan to 30th Jan 2045
      </h4>
      <form
        onSubmit={handleSubmit}
        className="form-inline flex justify-center  mb-4"
      >
        <div className="input-group flex ">
          <input
            type="email"
            className="form-control p-4"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ height: "60px" }}
          />

          <Button
            type="submit"
            className="rounded-none h-[60px] uppercase text-white bg-primary font-bold text-lg"
          >
            join
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Offer;
