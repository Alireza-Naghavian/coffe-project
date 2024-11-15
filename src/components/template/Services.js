import React from "react";
import { Card, CardBody, Image } from "@nextui-org/react";
import { FaTruck } from "react-icons/fa";
function Services({ services }) {
  return (
    <div className="container mx-auto px-10 mt-12">
      <div className="section-title">
        <h4
          className="text-primary uppercase text-4xl"
          style={{ letterSpacing: "5px" }}
        >
          Our Services
        </h4>
        <h1 className="text-[2.7rem] text-center font-bold">
          Fresh &amp; Organic Beans
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {services &&
          services.map((service) => {
            return (
              <Card
                key={service.id}
                isBlurred
                className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
                shadow="sm"
              >
                <CardBody>
                  <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                    <div className="relative col-span-6 md:col-span-4">
                      <Image
                        alt="Album cover"
                        className="object-cover"
                        height={200}
                        shadow="md"
                        src={service.img}
                        width="100%"
                      />
                    </div>

                    <div className="flex flex-col col-span-6 md:col-span-8">
                      <div className="flex justify-between items-start">
                        <div className="flex flex-col gap-0">
                          <h3 className="font-semibold text-foreground/90 flex  items-center gap-x-2">
                            <span className="w-8 h-8  rounded-full bg-primary/20 flex items-center justify-center">
                              <FaTruck size={22} className="text-primary" />
                            </span>
                            <span> {service.title}</span>
                          </h3>
                          <h1 className="text-large font-medium mt-2 max-w-[310px]">
                            {service.desc}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            );
          })}
      </div>
    </div>
  );
}

export default Services;
