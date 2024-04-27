import React from "react";
import { Button } from "@nextui-org/react";
function About() {
  return (
    <div className="container mx-auto px-10 mt-12">
      <div className="section-title">
        <h4
          className="text-primary uppercase text-4xl"
          style={{ letterSpacing: "5px" }}
        >
          About Us
        </h4>
        <h1 className="text-[2.7rem] text-center font-bold">Serving Since 1950</h1>
      </div>
      <div className="grid grid-cols-3">
        {/* our story */}
        <div className="flex flex-col ml-12 items-start font-bold ">
          <h1 className="mb-3 text-primary text-2xl">Our Story</h1>
          <h5 className="mb-3">
            Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed
            vero dolor sea
          </h5>
          <p className="max-w-[300px] leading-8">
            Takimata sed vero vero no sit sed, justo clita duo no duo amet et,
            nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet no.
            Est nonumy sed labore eirmod sit magna. Erat at est justo sit ut.
            Labor diam sed ipsum et eirmod
          </p>
          <Button
            disableRipple
            className="bg-gray-500 mt-12 text-white rounded-none px-10 text-lg"
            size="md"
          >
            Learn More
          </Button>
        </div>
        {/* img */}
        <div className=" ">
          <div className="">
            <img className="object-cover" src="/images/about.png" />
          </div>
        </div>
        {/* our visions */}
        <div className="flex flex-col   items-start font-bold">
          <h1 className="mb-3 text-primary text-2xl ">Our Vision</h1>
          <p className="max-w-[300px] leading-8">
            Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
            dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat
            justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor
          </p>
          <div className="mt-8">
            <h5 className="mb-3">
              <i className="fa fa-check text-primary mr-3"></i>Lorem ipsum dolor sit
              amet
            </h5>
            <h5 className="mb-3">
              <i className="fa fa-check text-primary mr-3"></i>Lorem ipsum dolor sit
              amet
            </h5>
            <h5 className="mb-3">
              <i className="fa fa-check text-primary mr-3"></i>Lorem ipsum dolor sit
              amet
            </h5>
          </div>
          <Button
            disableRipple
            className="bg-primary text-white rounded-none px-10 text-lg"
            size="md"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}

export default About;
