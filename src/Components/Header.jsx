import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const mobileContent = (
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-[#ecf3f9] transition rounded-2xl">
      <ul className="text-center text-xl p-20">
        <li
          onClick={() => navigate("/")}
          className={`my-4 py-4 border-b border-slate-800 cursor-pointer ${
            isActive("/") ? "text-[#2F79B8]" : ""
          }`}
        >
          Home
        </li>
        <li
          onClick={() => navigate("/service")}
          className={`my-4 py-4 border-b border-slate-800 cursor-pointer ${
            isActive("/service") ? "text-[#2F79B8]" : ""
          }`}
        >
          Services
        </li>
        <li
          onClick={() => navigate("/solar")}
          className={`my-4 py-4 border-b border-slate-800 cursor-pointer ${
            isActive("/solar") ? "text-[#2F79B8]" : ""
          }`}
        >
          Solar Energy
        </li>
        <li
          onClick={() => navigate("/projects")}
          className={`my-4 py-4 border-b border-slate-800 cursor-pointer ${
            isActive("/projects") ? "text-[#2F79B8]" : ""
          }`}
        >
          Projects
        </li>
        <li
          onClick={() => navigate("/contact")}
          className={`my-4 py-4 border-b border-slate-800 cursor-pointer ${
            isActive("/contact") ? "text-[#2F79B8]" : ""
          }`}
        >
          Contact Us
        </li>
        <li
          onClick={() => navigate("/about")}
          className={`my-4 py-4 border-b border-slate-800 cursor-pointer ${
            isActive("/about") ? "text-[#2F79B8]" : ""
          }`}
        >
          About Us
        </li>
      </ul>
    </div>
  );

  return (
    <header className="fixed top-2 z-50 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm">
          {/* Cam View Logo */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>
          {/* Mobile view Content */}
          <div>{open && mobileContent}</div>
          {/* Hamburger Button for show contents */}
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
            <li
              onClick={() => navigate("/")}
              className={`hover:text-[#2F79B8] transition cursor-pointer ${
                isActive("/") ? "text-[#2F79B8] border-b-4" : ""
              }`}
            >
              Home
            </li>
            <li
              onClick={() => navigate("/service")}
              className={`hover:text-[#2F79B8] transition cursor-pointer ${
                isActive("/service") ? "text-[#2F79B8] border-b-4" : ""
              }`}
            >
              Services
            </li>
            <li
              onClick={() => navigate("/solar")}
              className={`hover:text-[#2F79B8] transition cursor-pointer ${
                isActive("/solar") ? "text-[#2F79B8] border-b-4" : ""
              }`}
            >
              Solar
            </li>
            <li
              onClick={() => navigate("/projects")}
              className={`hover:text-[#2F79B8] transition cursor-pointer ${
                isActive("/projects") ? "text-[#2F79B8] border-b-4" : ""
              }`}
            >
              Projects
            </li>
            <li
              onClick={() => navigate("/about")}
              className={`hover:text-[#2F79B8] transition cursor-pointer ${
                isActive("/about") ? "text-[#2F79B8] border-b-4" : ""
              }`}
            >
              About
            </li>
            <li
              onClick={() => navigate("/contact")}
              className={`hover:text-[#2F79B8] transition cursor-pointer ${
                isActive("/contact") ? "text-[#2F79B8] border-b-4" : ""
              }`}
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
