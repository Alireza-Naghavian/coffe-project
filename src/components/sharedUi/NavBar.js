import React from "react";
import Link from "next/link";
import { Input } from "@nextui-org/react";
import { IoSearch } from "react-icons/io5";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { FaChevronDown } from "react-icons/fa";
import { useRouter } from "next/router";
function NavBar() {
  const { pathname } = useRouter();
  return (
    <div
      className="container py-7 px-10 absolute
    mx-auto w-full z-50
     max-w-[1920px] text-white"
    >
      <nav className=" flex justify-between items-center">
        <div className="flex items-center gap-x-4">
          {/* icon */}
          <Link href={"/"}>
            <h1 className="text-white  uppercase m-0 text-2xl xl:text-[2.7rem] text-nowrap ">
              next-coffee
            </h1>
          </Link>
          <div className="relative  w-full mb-3">
            <Input
              type="search"
              placeholder="search..."
              className="border-red-400 searchInput"
              variant="underlined"
            />
            <IoSearch className="text-2xl absolute top-2 right-0" />
          </div>
        </div>

        {/* menu section */}

        <div className="flex items-center ">
          <ul className="w-full flex items-center child-hover:text-primary  gap-x-10 child:text-lg child:font-bold">
            <li>
              <Link
                className={`tr-300 ${pathname === "/" ? "text-primary" : ""} `}
                href={"/"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`tr-300 ${
                  pathname === "/about" ? "text-primary" : ""
                } `}
                href={"/about"}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={`tr-300 ${
                  pathname === "/services" ? "text-primary" : ""
                } `}
                href={"/services"}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className={`tr-300 ${
                  pathname === "/menu" ? "text-primary" : ""
                } `}
                href={"/menu"}
              >
                Menu
              </Link>
            </li>
            <li className="relative w-full">
              <Dropdown className="absolute !-right-10 ">
                <DropdownTrigger>
                  <Button
                    variant=""
                    disableRipple
                    disableAnimation
                    aria-expanded="false"
                    className={"text-lg font-bold tr-300"}
                  >
                    Pages
                    <FaChevronDown />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  itemClasses={{
                    base: [
                      "data-[hover=true]:text-white",
                      "data-[hover=true]:bg-primary",
                      "transition-opacity",
                    ],
                  }}
                  aria-label="Action event example"
                >
                  <DropdownItem className=" w-full relative !hover:bg-primary-100">
                    <Link className="w-full flex" href={"/reservation"}>
                      {" "}
                      Reservation
                    </Link>
                  </DropdownItem>
                  <DropdownItem className=" w-full relative !hover:bg-primary-100">
                    <Link className="w-full flex" href={"/testimonial"}>
                      Testimonial
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </li>
            <li>
              <Link
                className={`tr-300 ${
                  pathname === "/contact" ? "text-primary" : ""
                } `}
                href={"/contact"}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
