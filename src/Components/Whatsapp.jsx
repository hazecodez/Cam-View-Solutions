import { FaWhatsapp } from "react-icons/fa";

export default function Whatsapp() {
  return (
    <>
      <div className="fixed z-50  bottom-6 right-4  sm:bottom-8 sm:right-12">
        <a href="https://wa.link/755bhf">
          <div className="flex justify-end bg-green-800 p-3 text-slate-50 shadow-lg rounded-full ">
            <FaWhatsapp className="w-8 h-8 " />
          </div>
        </a>
      </div>
    </>
  );
}
