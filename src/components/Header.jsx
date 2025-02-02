import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { MdHome } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io";
import { BsFillPatchQuestionFill } from "react-icons/bs";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className=" bg-gray-900 border-black border-b-2 p-4 flex  relative justify-between items-center  ">
        <div className="">
          <Link to={"/"}>
            <img src="src/Logo/logo.png" alt="logo" height={10} width={30} />
          </Link>
        </div>

        <div className="sm:hidden absolute right-3" onClick={toggleMenu}>
          <RxHamburgerMenu size={30} color="white" />
        </div>

        {/* //menus for mobile */}
        <div
          className={`h-screen fixed  right-0 top-0  w-3/4 pt-10 gap-5 bg-gray-900 border border-l-black border-t-black rounded-sm transform transition-transform duration-400 sm:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } `}
        >
          <div
            className="absolute top-5 left-3 bg-gray-800 rounded-lg p-2 "
            onClick={toggleMenu}
          >
            <RxCross2 size={25} color="gray" />
          </div>
          <ul className="flex flex-col w-full items-center text-center gap-5 relative text-white mt-10 pl-5 ">
            <Link className="w-full" to={"/home"}>
              <li className="flex items-center gap-4 text-lg">
                <MdHome size={23} color="white" />
                Home
              </li>
            </Link>

            <Link className="w-full" to={"/about"}>
              <li className="flex items-center gap-4 text-lg">
                <BsFillPatchQuestionFill />
                About
              </li>
            </Link>

            <Link className="w-full" to={"/contact"}>
              <li className="flex items-center gap-4 text-lg">
                <AiFillMessage />
                Contact
              </li>
            </Link>

            <Link className="w-full" to={"https://github.com/narendra-mahara"}>
              <li className="flex items-center gap-4 text-lg">
                <IoLogoGithub />
                Github
              </li>
            </Link>
          </ul>
        </div>

        {/* //menus for desktop */}
        <div className="flex items-center gap-20">
          <div className="hidden text-lg sm:flex md:text-2xl lg:text-3xl">
            <ul className="text-white flex gap-5">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "underline underline-offset-8 decoration-purple-500 decoration-2 text-gray-400"
                    : "text-white"
                }
                to={"/"}
              >
                <li className="flex items-center gap-4 text-lg">Home</li>
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "underline underline-offset-8 decoration-purple-500 decoration-2 text-gray-400"
                    : "text-white"
                }
                to={"/about"}
              >
                <li className="flex items-center gap-4 text-lg">About</li>
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "underline underline-offset-8 decoration-purple-500 decoration-2 text-gray-400"
                    : "text-white"
                }
                to={"/contact"}
              >
                <li className="flex items-center gap-4 text-lg">Contact</li>
              </NavLink>

              <NavLink
                target="_blank"
                to={"https://github.com/narendra-mahara"}
              >
                <li className="flex items-center gap-4 text-lg">Github</li>
              </NavLink>
            </ul>
          </div>
          <div className="buttons hidden sm:flex">
            <Link
              to="/login"
              className="mx-2 my-1 md:my-0 bg-gray-800 text-white px-5 py-2 rounded"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="mx-2 my-1 md:my-0 bg-purple-600 text-white  px-5 py-2 rounded"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
