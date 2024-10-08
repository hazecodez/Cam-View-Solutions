import { useState } from "react";
import { AiOutlineSafety } from "react-icons/ai";
import { BiSolidMemoryCard } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import { GiHealthNormal, GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import {
  MdEngineering,
  MdOutlineSecurity,
  MdOutlineSettingsRemote,
  MdSettingsRemote,
} from "react-icons/md";
import { PiMonitorFill, PiSecurityCameraFill } from "react-icons/pi";
import { SiOpenaccess } from "react-icons/si";
//import { useNavigate } from "react-router-dom";
import WhySolar from "./WhySolar";

export default function Service() {
  const [isGateVideoPlaying, setIsGateVideoPlaying] = useState(false);
  const [isCctvVideoPlaying, setIsCctvVideoPlaying] = useState(false);
  const [waterImageSwipe, setWaterImageSwipe] = useState(false);
  const [fullService, setFullService] = useState(false);
  //const navigate = useNavigate();

  const handleCctvVideoPlay = () => {
    setIsCctvVideoPlaying(true);
    setTimeout(() => {
      setIsCctvVideoPlaying(false);
    }, 20000);
  };
  const handleGateVideoPlay = () => {
    setIsGateVideoPlaying(true);
    setTimeout(() => {
      setIsGateVideoPlaying(false);
    }, 22000);
  };
  const handleWaterSwipe = () => {
    setWaterImageSwipe(!waterImageSwipe);
  };
  const handleFullServiceShow = () => {
    setFullService(true);
  };
  return (
    <div className="container px-4 lg:px-8 mx-auto max-w-screen-xl text-gray-700 overflow-y-hidden overflow-x-hidden">
      <div data-aos="flip-up" className=" mx-auto text-center sm:mt-36 mt-24">
        <h1 className="font-bold text-darken my-3 text-3xl">
          Our <span className="text-blue-500">Comprehensive</span> Solutions.
        </h1>
        <p className="leading-relaxed text-gray-500">
          At <span className="font-bold">Cam View Solutions,</span> we offer a
          wide range of cutting-edge technology and security services designed
          to meet your specific needs. From eco-friendly{" "}
          <span className="font-bold">Solar Energy Systems</span> that help
          reduce energy costs and carbon footprints, to{" "}
          <span className="font-bold">CCTV Surveillance Systems</span> that
          provide round-the-clock security for your home or business, we are
          committed to delivering reliable and innovative solutions. Our{" "}
          <span className="font-bold">Remote Gate Automation</span> ensures
          seamless and secure access control, while our{" "}
          <span className="font-bold">IT network and fiber LAN solutions</span>{" "}
          keep your operations running smoothly. Whether you are looking for
          advanced intrusion detection,{" "}
          <span className="font-bold">voice and video solutions</span>, or
          complete <span className="font-bold">BMS & IoT integrations</span>, we
          have the expertise to deliver top-tier results. Explore our full range
          of services to find the perfect solution for your property.
        </p>
      </div>

      {/* Solar Energy Sysytem */}

      <WhySolar
        head1={"Solar Energy Systems:"}
        head2={"Powering a Sustainable Future"}
        image={"src/assets/solar-4.png"}
      />

      {/* CCTV Integration */}

      <div className="md:flex mt-40 md:space-x-10 items-start">
        <div
          data-aos="fade-down"
          className="md:w-5/12 mt-20 md:mt-0 text-gray-500"
        >
          <h1 className="text-2xl font-semibold text-darken lg:pr-20">
            <span className="text-blue-500">CCTV Surveillance Systems: </span>
            Secure Your Peace of Mind
          </h1>
          <div className="flex items-center space-x-5 my-5">
            <div className="flex-shrink bg-white shadow-lg rounded-full p-3 flex items-center justify-center">
              <PiSecurityCameraFill className="h-5 w-5 text-black" />
            </div>
            <p>
              Enhanced Security – Monitor your property 24/7, deterring
              potential threats and improving overall safety.
            </p>
          </div>
          <div className="flex items-center space-x-5 my-5">
            <div className="flex-shrink bg-white shadow-lg rounded-full p-3 flex items-center justify-center">
              <PiMonitorFill className="h-5 w-5 text-blue-500" />
            </div>
            <p>
              Real-Time Monitoring – Stay connected and in control with live
              video feeds accessible from anywhere.
            </p>
          </div>
          <div className="flex items-center space-x-5 my-5">
            <div className="flex-shrink bg-white shadow-lg rounded-full p-3 flex items-center justify-center">
              <BiSolidMemoryCard className="h-5 w-5 text-red-500" />
            </div>
            <p>
              Evidence Collection – High-quality recordings provide crucial
              evidence in the event of an incident.
            </p>
          </div>
          <div className="flex items-center space-x-5 my-5">
            <div className="flex-shrink bg-white shadow-lg rounded-full p-3 flex items-center justify-center">
              <MdSettingsRemote className="h-5 w-5 text-green-500" />
            </div>
            <p>
              Remote Access – Manage and monitor your security system remotely,
              ensuring peace of mind even when you are away.
            </p>
          </div>
        </div>
        <div data-aos="fade-down" className="md:w-7/12 relative">
          <div
            style={{ background: "#33EFA0" }}
            className="w-32 h-32 rounded-full absolute z-0 left-4 -top-12 animate-pulse"
          ></div>
          <div
            style={{ background: "#33D9EF" }}
            className="w-5 h-5 rounded-full absolute z-0 left-36 -top-12 animate-ping"
          ></div>

          {!isCctvVideoPlaying ? (
            <img
              className="relative rounded-lg z-40 sm:w-5/6 floating"
              src="src/assets/cctv-1.png"
              alt=""
            />
          ) : (
            <video
              className="rounded-xl z-40 relative sm:w-96 sm:h-96"
              src="src/assets/cctv-video.mp4"
              muted
              autoPlay
              loop
              style={{ width: "100%" }}
            />
          )}

          {!isCctvVideoPlaying && (
            <button
              className="bg-white w-14 h-14 rounded-full flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out z-40"
              onClick={handleCctvVideoPlay}
            >
              <svg
                className="w-5 h-5 ml-1"
                viewBox="0 0 24 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5751 12.8097C23.2212 13.1983 23.2212 14.135 22.5751 14.5236L1.51538 27.1891C0.848878 27.5899 5.91205e-07 27.1099 6.25202e-07 26.3321L1.73245e-06 1.00123C1.76645e-06 0.223477 0.848877 -0.256572 1.51538 0.14427L22.5751 12.8097Z"
                  fill="#23BDEE"
                />
              </svg>
            </button>
          )}

          <div
            style={{ background: "#5B61EB" }}
            className="w-36 h-36 rounded-full absolute z-0 right-16 -bottom-1 animate-pulse"
          ></div>
          <div
            style={{ background: "#F56666" }}
            className="w-5 h-5 rounded-full absolute z-0 right-52 bottom-1 animate-ping"
          ></div>
        </div>
      </div>

      {/* Remote Gate Automation */}

      <div className="md:flex mt-40 md:space-x-10 items-start">
        <div data-aos="fade-down" className="md:w-7/12 relative">
          <div
            style={{ background: "#33EFA0" }}
            className="w-32 h-32 rounded-full absolute z-0 left-4 -top-12 animate-pulse"
          ></div>
          <div
            style={{ background: "#33D9EF" }}
            className="w-5 h-5 rounded-full absolute z-0 left-36 -top-12 animate-ping"
          ></div>
          {!isGateVideoPlaying ? (
            <img
              className="relative rounded-lg z-40 sm:w-5/6 floating"
              src="src/assets/gate-2.png"
              alt=""
            />
          ) : (
            <video
              className="rounded-xl z-40 relative sm:w-96 sm:h-96"
              src="src/assets/project-2.mp4"
              muted
              autoPlay
              loop
              style={{ width: "100%" }}
            />
          )}
          {!isGateVideoPlaying && (
            <button
              className="bg-white w-14 h-14 rounded-full flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out z-40"
              onClick={handleGateVideoPlay}
            >
              <svg
                className="w-5 h-5 ml-1"
                viewBox="0 0 24 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5751 12.8097C23.2212 13.1983 23.2212 14.135 22.5751 14.5236L1.51538 27.1891C0.848878 27.5899 5.91205e-07 27.1099 6.25202e-07 26.3321L1.73245e-06 1.00123C1.76645e-06 0.223477 0.848877 -0.256572 1.51538 0.14427L22.5751 12.8097Z"
                  fill="#23BDEE"
                />
              </svg>
            </button>
          )}

          <div
            style={{ background: "#5B61EB" }}
            className="w-36 h-36 rounded-full absolute z-0 right-16 -bottom-1 animate-pulse"
          ></div>
          <div
            style={{ background: "#F56666" }}
            className="w-5 h-5 rounded-full absolute z-0 right-52 bottom-1 animate-ping"
          ></div>
        </div>
        <div
          data-aos="fade-down"
          className="md:w-5/12 mt-20 md:mt-0 text-gray-500"
        >
          <h1 className="text-2xl font-semibold text-darken lg:pr-20">
            <span className="text-blue-500">Remote Gate Automation: </span>
            Convenience Meets Security
          </h1>
          <div className="flex items-center space-x-5 my-5">
            <div className="flex-shrink bg-white shadow-lg rounded-full p-3 flex items-center justify-center">
              <SiOpenaccess className="h-5 w-5 text-green-500" />
            </div>
            <p>
              Seamless Access Control – Open and close gates with just a tap,
              offering convenience without leaving your vehicle.
            </p>
          </div>
          <div className="flex items-center space-x-5 my-5">
            <div className="flex-shrink bg-white shadow-lg rounded-full p-3 flex items-center justify-center">
              <MdOutlineSettingsRemote className="h-5 w-5 text-yellow-500" />
            </div>
            <p>
              User-Friendly – Easy to operate with remote controls or mobile
              apps, ensuring smooth functionality for all users.
            </p>
          </div>
          <div className="flex items-center space-x-5 my-5">
            <div className="flex-shrink bg-white shadow-lg rounded-full p-3 flex items-center justify-center">
              <MdOutlineSecurity className="h-5 w-5 text-blue-500" />
            </div>
            <p>
              Enhanced Security – Improve property safety with controlled,
              automated gate access, preventing unauthorized entry.
            </p>
          </div>
          <div className="flex items-center space-x-5 my-5">
            <div className="flex-shrink bg-white shadow-lg rounded-full p-3 flex items-center justify-center">
              <GiTakeMyMoney className="h-5 w-5 text-green-500" />
            </div>
            <p>
              Increased Property Value – Modern automated gates add a touch of
              luxury and increase the value of your property.
            </p>
          </div>
        </div>
      </div>

      {/* Water Purifier */}

      <div className="md:flex mt-40 md:space-x-10 items-start">
        <div
          data-aos="fade-down"
          className="md:w-5/12 mt-20 md:mt-0 text-gray-500"
        >
          <h1 className="text-2xl font-semibold text-darken lg:pr-20">
            <span className="text-blue-500">Water Purifier Systems: </span>
            Pure Water for a Healthier Life
          </h1>
          <div className="flex items-center space-x-5 my-5">
            <div className="flex-shrink bg-white shadow-lg rounded-full p-3 flex items-center justify-center">
              <AiOutlineSafety className="h-5 w-5 text-green-500" />
            </div>
            <p>
              Clean & Safe Drinking Water – Remove harmful contaminants,
              ensuring pure and safe water for you and your family.
            </p>
          </div>
          <div className="flex items-center space-x-5 my-5">
            <div className="flex-shrink bg-white shadow-lg rounded-full p-3 flex items-center justify-center">
              <GiHealthNormal className="h-5 w-5 text-yellow-500" />
            </div>
            <p>
              Health Benefits – Prevent waterborne diseases by purifying tap
              water, promoting overall health and well-being.
            </p>
          </div>
          <div className="flex items-center space-x-5 my-5">
            <div className="flex-shrink bg-white shadow-lg rounded-full p-3 flex items-center justify-center">
              <MdEngineering className="h-5 w-5 text-blue-500" />
            </div>
            <p>
              Easy Maintenance – Simple to maintain and service, ensuring a
              steady supply of purified water with minimal effort.
            </p>
          </div>
          <div className="flex items-center space-x-5 my-5">
            <div className="flex-shrink bg-white shadow-lg rounded-full p-3 flex items-center justify-center">
              <GiReceiveMoney className="h-5 w-5 text-green-500" />
            </div>
            <p>
              Cost-Effective – Reduce the need for bottled water, saving money
              while protecting the environment.
            </p>
          </div>
        </div>
        <div data-aos="fade-down" className="md:w-7/12 relative">
          <div
            style={{ background: "#33EFA0" }}
            className="w-32 h-32 rounded-full absolute z-0 left-4 -top-12 animate-pulse"
          ></div>
          <div
            style={{ background: "#33D9EF" }}
            className="w-5 h-5 rounded-full absolute z-0 left-36 -top-12 animate-ping"
          ></div>

          {/* Both images have fixed width, height, and object-fit */}
          {!waterImageSwipe ? (
            <img
              className="relative rounded-lg z-40 sm:w-5/6 floating"
              src="src/assets/water-1.jpg"
              alt=""
              style={{ width: "600px", height: "400px", objectFit: "cover" }}
            />
          ) : (
            <img
              className="relative rounded-lg z-40 sm:w-5/6 floating"
              src="src/assets/water-2.heic"
              alt=""
              style={{ width: "600px", height: "400px", objectFit: "cover" }}
            />
          )}

          <button
            className="bg-white w-14 h-14 rounded-full flex items-center justify-center absolute bottom-44 sm:right-16 right-4 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out z-40"
            onClick={handleWaterSwipe}
          >
            <FaArrowRight className="text-blue-500 w-5 h-5" />
          </button>

          <div
            style={{ background: "#5B61EB" }}
            className="w-36 h-36 rounded-full absolute z-0 right-16 -bottom-1 animate-pulse"
          ></div>
          <div
            style={{ background: "#F56666" }}
            className="w-5 h-5 rounded-full absolute z-0 right-52 bottom-1 animate-ping"
          ></div>
        </div>
      </div>
      {!fullService && (
        <button
          onClick={handleFullServiceShow}
          data-aos="flip-up"
          className="px-5 py-3 border border-blue-500 text-blue-500 font-medium my-14 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out rounded-full mx-auto block"
        >
          See more services
        </button>
      )}
    </div>
  );
}
