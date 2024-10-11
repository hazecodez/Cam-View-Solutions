import { BiSolidRightArrow } from "react-icons/bi";
import Button from "./Button";
import { PiPhoneCallThin } from "react-icons/pi";
// import { CiMail } from "react-icons/ci";

export default function ContactUs() {
  return (
    <>
      <div className="md:flex mt-40 md:space-x-10 items-start bg-white rounded-md p-10">
        <div data-aos="fade-down" className="md:w-5/12 relative">
          <h1 className="text-6xl">Contact</h1>
        </div>

        <div
          data-aos="fade-down"
          className="md:w-7/12 mt-20 md:mt-0 text-gray-500"
        >
          <div className="flex">
            <BiSolidRightArrow className="text-black text-md" />
            <h1 className="pl-4 pb-5">HOW CAN WE HELP?</h1>
          </div>

          <h1 className="text-2xl text-black font-mono">
            Near Ragam Club , Kollanoor
            <br />
            Kumaranellur - 679 552
            <br />
            <br />
            <div className="flex gap-4">
              <PiPhoneCallThin />
              <a href="tel:919746061660">9746061660</a>
            </div>
            <div className="flex gap-4">
              <PiPhoneCallThin />
              <a href="tel:918606548795">8606548795</a>
            </div>
            <div className="flex gap-4">
              <PiPhoneCallThin />
              <a href="tel:919072735020">9072735020</a>
            </div>
            {/* <br />
            <div className="flex gap-4">
            <CiMail />
              <a href="mailto:camviewsolutions5020@gmail.com">
                camviewsolutions5020@gmail.com
              </a>
            </div> */}
          </h1>
        </div>
      </div>

      <div className="md:flex mt-40 md:space-x-10 items-start">
        <img
          className="relative rounded-lg z-40 sm:w-3/6 floating pt-8"
          src="src/assets/contact.webp"
          alt=""
        />
        <div
          data-aos="fade-down"
          className="md:w-7/12 mt-20 md:mt-0 text-gray-500"
        >
          <div className="flex">
            <BiSolidRightArrow className="text-black text-md" />
            <h1 className="pl-4 pb-5">CONTACT US</h1>
          </div>

          <h1 className="text-4xl font-mono">
            Tell us about your next project
          </h1>
          <br />
          <hr />
          <br />
          <form action="" className="p-4">
            <p>FULL NAME *</p>
            <input type="text" className="w-full mb-5 border-none bg-gray-50" />
            <p>EMAIL *</p>
            <input type="text" className="w-full mb-5 border-none bg-gray-50" />
            <p>MESSAGE *</p>
            <textarea
              name=""
              id=""
              rows="4"
              className="w-full mb-5 border-none bg-gray-50"
            ></textarea>
            <button className="bg-blue-500 text-white w-full h-12 font-mono text-2xl hover:bg-white hover:text-black transition-colors duration-700">
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      <Button name="See our projects" link="/projects" />
    </>
  );
}
