import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const mobileContent = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-[#ecf3f9] transition">
        <ul className="text-center text-xl p-20">
          <li className="my-4 py-4 border-b border-slate-800 hover:rounded hover:text-[#2F79B8] cursor-pointer">
            Home
          </li>
          <li className="my-4 py-4 border-b border-slate-800 hover:rounded hover:text-[#2F79B8] cursor-pointer">
            About
          </li>
          <li className="my-4 py-4 border-b border-slate-800 hover:rounded hover:text-[#2F79B8] cursor-pointer">
            Why
          </li>
          <li className="my-4 py-4 border-b border-slate-800 hover:rounded hover:text-[#2F79B8] cursor-pointer">
            Projects
          </li>
          <li className="my-4 py-4 border-b border-slate-800 hover:rounded hover:text-[#2F79B8] cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
    </>
  );
  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 text-black lg:py-5 px-20 py-4 flex-1">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold">Logo</span>
        </div>
        <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <li className="hover:text-[#2F79B8] transition border-b-2 border-slate-900 hover:border-[#2F79B8] cursor-pointer">
                Home
              </li>
              <li className="hover:text-[#2F79B8] transition border-b-2 border-slate-900 hover:border-[#2F79B8] cursor-pointer">
                About
              </li>
              <li className="hover:text-[#2F79B8] transition border-b-2 border-slate-900 hover:border-[#2F79B8] cursor-pointer">
                Why
              </li>
              <li className="hover:text-[#2F79B8] transition border-b-2 border-slate-900 hover:border-[#2F79B8] cursor-pointer">
                Projects
              </li>
              <li className="hover:text-[#2F79B8] transition border-b-2 border-slate-900 hover:border-[#2F79B8] cursor-pointer">
                Contact
              </li>
            </ul>
          </div>
        </div>

        <div>{click && mobileContent}</div>
        <button
          className="block sm:hidden transition"
          onClick={() => {
            setClick(!click);
          }}
        >
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
}
