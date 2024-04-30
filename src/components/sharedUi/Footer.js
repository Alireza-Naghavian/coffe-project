import { Button } from "@nextui-org/react";
import React from "react";

function Footer() {
  return (
    <footer>
      <div className=" w-full footer text-white mt-5 pt-5 px-0 relative overlay-top">
        <div className="row grid grid-cols-4 mx-0 pt-5  lg:px-5 mt-4">
          <div className=" flex  flex-col gap-y-2 mb-5">
            <h4
              className="text-white uppercase text-2xl"
              style={{ letterSpacing: "3px" }}
            >
              Get In Touch
            </h4>
            <p>
              <i className="fa fa-map-marker-alt mr-2"></i>123 Street, New York, USA
            </p>
            <p>
              <i className="fa fa-phone-alt mr-2"></i>+012 345 67890
            </p>
            <p className="m-0">
              <i className="fa fa-envelope mr-2"></i>info@example.com
            </p>
          </div>
          <div className=" px-12 flex  flex-col items-start mb-5">
            <h4
              className="text-white text-uppercase mb-4"
              style={{ letterSpacing: "3px" }}
            >
              Follow Us
            </h4>
            <p>
              Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4
              className="text-white text-uppercase mb-4"
              style={{ letterSpacing: "3px" }}
            >
              Open Hours
            </h4>
            <div>
              <h6 className="text-white text-uppercase">Monday - Friday</h6>
              <p>8.00 AM - 8.00 PM</p>
              <h6 className="text-white text-uppercase">Saturday - Sunday</h6>
              <p>2.00 PM - 8.00 PM</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4
              className="text-white text-uppercase mb-4"
              style={{ letterSpacing: "3px" }}
            >
              Newsletter
            </h4>
            <p>
              Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum
            </p>
            <div className="w-100">
              <form className="form-inline flex justify-center  mb-4">
                <div className="input-group flex justify-center mx-auto mt-12 ">
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
          </div>
        </div>
        <div
          className="container  mx-auto text-center text-white border-t border-primary  mt-4 py-4 px-sm-3 px-md-5"
          style={{ borderColor: "rgba(256, 256, 256, .1) !important" }}
        >
          <p className="mb-2 text-white">
            Copyright ©{" "}
            <a className="font-weight-bold" href="#">
              Domain
            </a>
            . All Rights Reserved.
          </p>
          <p className="m-0 text-white">
            Designed by{" "}
            <a className="font-weight-bold" href="https://htmlcodex.com">
              HTML Codex
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
