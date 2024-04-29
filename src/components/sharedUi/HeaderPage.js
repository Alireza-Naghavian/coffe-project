import Link from "next/link";
import React from "react";

function HeaderPage({ route }) {
  return (
    <div className="w-full page-header mb-5 relative overlay-bottom">
      <div
        className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5"
        style={{ minHeight: "400px" }}
      >
        <h1 className="text-[2.7rem] text-center text-primary font-bold pt-24">{route}</h1>
        <div className="inline-flex justify-center w-full mt-12  mb-lg-5">
          <p className="m-0 text-white">
            <Link className="text-white" href="/">
              Home
            </Link>
          </p>
          <p className="m-0 text-white px-2">/</p>
          <p className="m-0 text-white">
            <Link href={`/${route}`}>{route}</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeaderPage;
