import React from "react";
import { Card, CardBody, Image } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { Badge } from "@nextui-org/react";
function ProductCard() {
  return (
    <div className="container mx-auto px-20 mt-32">
      <div class="section-title">
        <h4
          class="text-primary uppercase text-4xl"
          style={{ letterSpacing: "5px" }}
        >
          Menu &amp; Pricing
        </h4>
        <h1 class="text-[2.7rem] text-center font-bold">Competitive Pricing</h1>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {/* hot coffee */}
        <div className="grid grid-cols-1 gap-y-8">
        <h1 class="mb-5 text-4xl font-bold">Hot Coffee</h1>
        <Card className="border-none bg-transparent shadow-none max-w-[610px]">
            <CardBody>
              <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                <div className="relative col-span-6 md:col-span-4">
                  <div className="relative  flex">
                    <Badge
                      content="5$"
                      color="primary"
                      placement="top"
                      className=" w-[50px]  z-50 rounded-full h-[50px] -mt-1 "
                    />

                    <Image
                      alt="Album cover"
                      className="object-cover rounded-full"
                      src="/images/menu-2.jpg"
                    />
                  </div>
                </div>

                <div className="flex flex-col col-span-6 md:col-span-8">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-0">
                      <h3 className="font-semibold text-foreground/90 flex  items-center gap-x-2">
                        <Link
                          className="text-lg border-b border-b-primary"
                          href=""
                        >
                          Hot Chocolete
                        </Link>
                      </h3>
                      <h1 className="text-large font-medium mt-2 max-w-[310px]">
                        Sit lorem ipsum et diam elitr est dolor sed duo guberg
                        sea et et lorem dolor
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
        {/* cold coffee */}
        <div className="grid grid-cols-1 gap-y-8">
        <h1 class="mb-5 text-4xl font-bold">Cold Coffee</h1>

        <Card className="border-none bg-transparent shadow-none max-w-[610px]">
            <CardBody>
              <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                <div className="relative col-span-6 md:col-span-4">
                  <div className="relative  flex">
                    <Badge
                      content="10$"
                      color="primary"
                      placement="top"
                      className=" w-[50px]  z-50 rounded-full h-[50px] -mt-1 "
                    />

                    <Image
                      alt="Album cover"
                      className="object-cover rounded-full"
                      src="/images/menu-3.jpg"
                    />
                  </div>
                </div>

                <div className="flex flex-col col-span-6 md:col-span-8">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-0">
                      <h3 className="font-semibold text-foreground/90 flex  items-center gap-x-2">
                        <Link
                          className="text-lg border-b border-b-primary"
                          href=""
                        >
                          Ice Cream
                        </Link>
                      </h3>
                      <h1 className="text-large font-medium mt-2 max-w-[310px]">
                        Sit lorem ipsum et diam elitr est dolor sed duo guberg
                        sea et et lorem dolor
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;