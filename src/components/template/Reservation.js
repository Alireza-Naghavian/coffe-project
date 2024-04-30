import React from "react";
import {
  Button,
  Input,
  Select,
  SelectItem,
  TimeInput,
} from "@nextui-org/react";
import { DateInput } from "@nextui-org/react";
import { CalendarDate, parseDate } from "@internationalized/date";
function Reservation() {
  return (
    <div className="container  mx-auto mt-24 px-20 my-5">
      <div className="reservation relative overlay-top overlay-bottom">
        <div className="   grid grid-cols-2 grid-rows-2 items-center">
          <div className=" my-5 row-span-2 ">
            <div className="p-5">
              <div className="mb-4">
                <h1 className="text-[4.7rem]  font-bold text-primary">
                  30% OFF
                </h1>
                <h1 className="text-white text-[2.7rem]  font-bold">
                  For Online Reservation
                </h1>
              </div>
              <p className="text-white w-[50%]">
                Lorem justo clita erat lorem labore ea, justo dolor lorem ipsum
                ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed
                diam. Ea et erat ut sed diam sea
              </p>
              <ul className="list-inline text-white m-0">
                <li className="py-2">
                  <i className="fa fa-check text-primary mr-3"></i>Lorem ipsum
                  dolor sit amet
                </li>
                <li className="py-2">
                  <i className="fa fa-check text-primary mr-3"></i>Lorem ipsum
                  dolor sit amet
                </li>
                <li className="py-2">
                  <i className="fa fa-check text-primary mr-3"></i>Lorem ipsum
                  dolor sit amet
                </li>
              </ul>
            </div>
          </div>
          <div className="  h-full row-span-2 ">
            <div
              className="text-center h-full p-5"
              style={{ background: "rgba(51, 33, 29, .8)" }}
            >
              <h1 className="text-white mb-4 mt-5">Book Your Table</h1>
              <form className="mb-5 flex flex-col gap-y-6">
                <div className="form-group">
                  <Input
                    type="text"
                    label="text"
                    variant="bordered"
                    className="rounded-none "
                    classNames={{
                      label: ["text-white"],
                    }}
                  />
                </div>
                <div className="form-group">
                  <Input
                    type="email"
                    label="Email"
                    variant="bordered"
                    className="rounded-none"
                    classNames={{
                      label: ["text-white"],
                    }}
                  />
                </div>
                <div className="form-group">
                  <DateInput
                    labelPlacement="inside"
                    variant="bordered"
                    label={"Birth date"}
                    isRequired
                    classNames={{
                      label: ["text-white"],
                      input: ["text-white", "placeholder:text-white"],
                    }}
                    className="text-white placeholder:text-white"
                    defaultValue={parseDate("2024-04-04")}
                    placeholderValue={new CalendarDate(1995, 11, 6)}
                  />
                </div>
                <div className="form-group">
                  <TimeInput
                    labelPlacement="inside"
                    classNames={{
                      label: ["text-white"],
                      input: ["text-white", "placeholder:text-white"],
                    }}
                    variant="bordered"
                    label="Event Time"
                  />
                </div>
                <div className="form-group">
                  <Select
                    variant="bordered"
                    label="persons"
                    className="max-w-full"
                  >
                    <SelectItem value={"person 1"}>person 1</SelectItem>
                    <SelectItem value={"person 1"}>person 2</SelectItem>
                    <SelectItem value={"person 1"}>person 3</SelectItem>
                    <SelectItem value={"person 1"}>person 4</SelectItem>
                  </Select>
                </div>

                <div>
                  <Button className="w-full bg-primary  text-lg first-letter:uppercase rounded-none py-4  text-white">
                    Book Now
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
