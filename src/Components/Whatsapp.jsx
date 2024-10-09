import { useState } from "react";
import { FaAddressBook, FaPhone, FaWhatsapp } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export default function Whatsapp() {
  const [click, setClick] = useState(false);
  return (
    <>
      <div
        className={`fixed z-50  sm:bottom-8 sm:right-12 bottom-6 right-4 translate-transform duration-500 ${
          click ? "translate-y-[-160px] opacity-100" : "translate-y-0 opacity-0"
        }`}
      >
        <a href="https://wa.link/755bhf">
          <div className="flex justify-end bg-green-800 p-3 hover:transition-colors hover:bg-blue-500 text-slate-50 shadow-lg rounded-full ">
            <FaWhatsapp className="w-7 h-7 " />
          </div>
        </a>
      </div>
      <div
        className={`fixed z-50  sm:bottom-8 sm:right-12 bottom-6 right-4 translate-transform duration-500 ${
          click ? "translate-y-[-80px] opacity-100" : "translate-y-0 opacity-0"
        }`}
      >
        <a href="tel:918606548795">
          <div className="flex justify-end bg-green-800 p-3 hover:transition-colors hover:bg-blue-500 text-slate-50 shadow-lg rounded-full ">
            <FaPhone className="w-7 h-7 " />
          </div>
        </a>
      </div>

      <div className="fixed z-50  bottom-6 right-4  sm:bottom-8 sm:right-12">
        <a onClick={() => setClick(!click)}>
          <div
            className={`flex justify-end ${
              click ? "bg-gray-400" : "bg-blue-800"
            }  p-3 text-slate-50 shadow-lg rounded-full `}
          >
            {!click ? (
              <FaAddressBook className="w-7 h-7 " />
            ) : (
              <FaX className="w-7 h-7 " />
            )}
          </div>
        </a>
      </div>
    </>
  );
}
