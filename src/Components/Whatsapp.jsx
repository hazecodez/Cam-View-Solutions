import { useState } from "react";
import { FaAddressBook, FaPhone, FaWhatsapp } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export default function Whatsapp() {
  const [click, setClick] = useState(false);
  return (
    <>
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
      {click && (
        <>
          <div className="fixed z-50  bottom-6 right-24  sm:bottom-8 sm:right-28">
            <a href="https://wa.link/755bhf">
              <div className="flex justify-end bg-green-800 p-3 text-slate-50 shadow-lg rounded-full ">
                <FaWhatsapp className="w-7 h-7 " />
              </div>
            </a>
          </div>
          <div className="fixed z-50  bottom-24 right-4  sm:bottom-24 sm:right-12">
            <a href="">
              <div className="flex justify-end bg-green-800 p-3 text-slate-50 shadow-lg rounded-full ">
                <FaPhone className="w-7 h-7 " />
              </div>
            </a>
          </div>
        </>
      )}
    </>
  );
}
