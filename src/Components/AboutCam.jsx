import { BiSolidRightArrow } from "react-icons/bi";
import Button from "./Button";

export default function AboutCam() {
  return (
    <>
      <div className="md:flex mt-40 md:space-x-10 items-start">
        <div data-aos="fade-down" className="md:w-5/12 relative">
          <h1 className="text-6xl">We build for success</h1>
        </div>
        <div
          data-aos="fade-down"
          className="md:w-7/12 mt-20 md:mt-0 text-gray-500"
        >
          <div className="flex">
            <BiSolidRightArrow className="text-black text-md" />
            <h1 className="pl-4 pb-5">ABOUT CAM VIEW SOLUTIONS LLP</h1>
          </div>

          <p>
            At Cam View Solutions, we provide a wide range of advanced security
            and technology services, including wireless intrusion systems, CCTV
            surveillance, IT security, fiber LAN solutions, solar systems, and
            more. Our expertise ensures reliable and innovative solutions
            tailored to your needs.
          </p>
          <img
            className="relative rounded-lg z-40 sm:w-5/6 floating pt-8"
            src="/assets/about.webp"
            alt=""
          />
        </div>
      </div>

      <div className="md:flex mt-40 md:space-x-10 items-start">
        <div data-aos="fade-down" className="md:w-5/12 relative">
          <h1 className="text-6xl">We build for people</h1>
        </div>
        <div
          data-aos="fade-down"
          className="md:w-7/12 mt-20 md:mt-0 text-gray-500"
        >
          <div className="flex">
            <BiSolidRightArrow className="text-black text-md" />
            <h1 className="pl-4 pb-5">WHY WE DO WHAT WE DO</h1>
          </div>

          <p>
            At Cam View Solutions, we provide a wide range of advanced security
            and technology services, including wireless intrusion systems, CCTV
            surveillance, IT security, fiber LAN solutions, solar systems, and
            more. Our expertise ensures reliable and innovative solutions
            tailored to your needs.
          </p>
        </div>
      </div>
      <Button link="/contact" name="Contact Us" />
    </>
  );
}
