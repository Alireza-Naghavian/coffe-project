import React from "react";
import { Card, CardBody, Image } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { Badge } from "@nextui-org/react";
function ProductCard({ coffee }) {
  return (
    <Card className="border-none bg-transparent shadow-none max-w-[610px]">
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <div className="relative  flex">
              <Badge
                content={`${coffee.price}$`}
                color="primary"
                placement="top"
                className=" w-[50px]  z-50 rounded-full h-[50px] -mt-1 "
              />
              <Image
                alt="Album cover"
                className="object-cover rounded-full"
                src={coffee.img}
              />
            </div>
          </div>
          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-foreground/90 flex  items-center gap-x-2">
                  <Link  className="text-lg border-b border-b-primary" href={`/products/${coffee.id}`}>
                    {coffee.title}
                  </Link>
                </h3>
                <h1 className="text-large font-medium mt-2 max-w-[310px]">
                  {coffee.desc}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default ProductCard;
