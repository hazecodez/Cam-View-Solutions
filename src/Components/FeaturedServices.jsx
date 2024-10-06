import { BiSolidCctv } from "react-icons/bi";
import { MdSettingsRemote } from "react-icons/md";
import { PiSolarPanelDuotone } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
// import Testimonial from "./Testimonial";
import WorkInHome from "./WorkInHome";

export default function FeaturedServices() {
  const navigate = useNavigate();
  return (
    <div className="container px-4 lg:px-8 mx-auto max-w-screen-xl text-gray-700 overflow-y-hidden overflow-x-hidden">
      <div data-aos="flip-up" className="max-w-xl mx-auto text-center mt-24">
        <h1 className="font-bold text-darken my-3 text-3xl">
          Our <span className="text-blue-500">Featured</span> Services.
        </h1>
        <p className="leading-relaxed text-gray-500">
          Explore our top solutions: reliable{" "}
          <span className="font-bold">Solar Energy Systems</span> for
          eco-friendly power, cutting-edge{" "}
          <span className="font-bold">CCTV Surveillance Systems</span> for
          enhanced security, and seamless{" "}
          <span className="font-bold">Remote Gate Automation</span> for modern
          convenience. We also offer many other tailored solutions to meet your
          needs.{" "}
          <span className="font-bold text-blue-500 cursor-pointer">
            <a onClick={() => navigate("/service")}>Learn more..</a>
          </span>
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-14 md:gap-5 mt-20">
        <div
          data-aos="fade-up"
          className="bg-white shadow-xl p-6 text-center rounded-xl"
        >
          <div
            style={{ background: "#5B72EE" }}
            className="rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12"
          >
            <PiSolarPanelDuotone className="text-white w-8 h-8" />
          </div>
          <h1 className="font-medium text-xl mb-3 lg:px-14 text-darken">
            Power Your Future with Solar
          </h1>
          <p className="px-4 text-gray-500">
            Take control of your energy with our efficient and eco-friendly
            Solar Energy Systems. Reduce your carbon footprint and enjoy
            sustainable, cost-effective power for your home or business.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="150"
          className="bg-white shadow-xl p-6 text-center rounded-xl"
        >
          <div
            style={{ background: "#F48C06" }}
            className="rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12"
          >
            <BiSolidCctv className="text-white w-8 h-8" />
          </div>
          <h1 className="font-medium text-xl mb-3 lg:px-14 text-darken">
            Stay Secure with Advanced CCTV Solutions
          </h1>
          <p className="px-4 text-gray-500">
            Protect what matters most with our reliable CCTV Surveillance
            Systems. Monitor your property in real-time and enhance security
            with cutting-edge technology designed for peace of mind.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="bg-white shadow-xl p-6 text-center rounded-xl"
        >
          <div
            style={{ background: "#29B9E7" }}
            className="rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12"
          >
            <MdSettingsRemote className="text-white w-8 h-8" />
          </div>
          <h1 className="font-medium text-xl mb-3 lg:px-14 text-darken lg:h-14 pt-3">
            Convenience at Your Fingertips
          </h1>
          <p className="px-4 text-gray-500">
            Upgrade to Remote Gate Automation for seamless access control. Enjoy
            enhanced security and convenience with smooth, automated entry
            solutions tailored to your needs.{" "}
          </p>
        </div>
      </div>
      <button onClick={()=> navigate("/service")} data-aos="flip-up" className="px-5 py-3 border border-blue-500 text-blue-500 font-medium my-14 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out rounded-full mx-auto block">See more services</button>
      {/* <Testimonial/> */}
      <WorkInHome/>
    </div>
  );
}
