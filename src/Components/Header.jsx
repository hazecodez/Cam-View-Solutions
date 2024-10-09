import { useState } from "react";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  

  const mobileContent = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-[#ecf3f9] transition rounded-2xl">
        <ul className="text-center text-xl p-20">
          <li onClick={()=>{
            navigate("/")
          }} className="my-4 py-4 border-b border-slate-800 hover:rounded hover:text-[#2F79B8] cursor-pointer">
            Home
          </li>
          <li
          onClick={()=>{
            navigate("/service")
          }} className="my-4 py-4 border-b border-slate-800 hover:rounded hover:text-[#2F79B8] cursor-pointer">
            Services
          </li>
          <li onClick={()=>{
            navigate("/solar")
          }} className="my-4 py-4 border-b border-slate-800 hover:rounded hover:text-[#2F79B8] cursor-pointer">
            Solar Energy
          </li>
          <li onClick={()=>{
            navigate("/contact")
          }} className="my-4 py-4 border-b border-slate-800 hover:rounded hover:text-[#2F79B8] cursor-pointer">
            Contact Us
          </li>
          <li onClick={()=>{
            navigate("/about")
          }} className="my-4 py-4 border-b border-slate-800 hover:rounded hover:text-[#2F79B8] cursor-pointer">
            About Us
          </li>
        </ul>
      </div>
    </>
  );

  return (
    <header className="fixed top-2 z-50 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Cam View Logo */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>
          {/* Mobile view Content */}
          <div>{open && mobileContent}</div>
          {/* HandBurger Button for show contents */}
          <button
            className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
            onClick={() => setOpen(!open)}
          >
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              {open ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                />
              )}
            </svg>
          </button>

          {/* Navbar Contents */}
          <ul className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden gap-12">
            <li onClick={()=>{
            navigate("/")
          }} className="hover:text-[#2F79B8] transition border-b-2 border-slate-900 hover:border-[#2F79B8] cursor-pointer">
              Home
            </li>
            <li onClick={()=>{
            navigate("/service")
          }} className="hover:text-[#2F79B8] transition border-b-2 border-slate-900 hover:border-[#2F79B8] cursor-pointer">
              Services
            </li>
            <li onClick={()=>{
            navigate("/solar")
          }} className="hover:text-[#2F79B8] transition border-b-2 border-slate-900 hover:border-[#2F79B8] cursor-pointer">
              Solar Energy
            </li>
            <li onClick={()=>{
            navigate("/about")
          }} className="hover:text-[#2F79B8] transition border-b-2 border-slate-900 hover:border-[#2F79B8] cursor-pointer">
              About
            </li>

            <li onClick={()=>{
            navigate("/contact")
          }} className="hover:text-[#2F79B8] transition border-b-2 border-slate-900 hover:border-[#2F79B8] cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
