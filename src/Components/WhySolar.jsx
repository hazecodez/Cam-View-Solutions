import { AiOutlineStock } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";
import { MdEngineering } from "react-icons/md";
import { PiPlantFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function WhySolar({ head1, head2, image }) {
  const navigate = useNavigate();
  return (
    <div className="md:flex mt-40 md:space-x-10 items-start">
      <div
        onClick={() => navigate("/solar")}
        data-aos="fade-down"
        className="md:w-7/12 relative"
      >
        <div
          style={{ background: "#33EFA0" }}
          className="w-32 h-32 rounded-full absolute z-0 left-4 -top-12 animate-pulse"
        ></div>
        <div
          style={{ background: "#33D9EF" }}
          className="w-5 h-5 rounded-full absolute z-0 left-36 -top-12 animate-ping"
        ></div>
        <img
          className="relative rounded-lg z-40 sm:w-5/6 floating"
          src={image}
          alt=""
        />

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
          <span className="text-blue-500">{head1} </span>
          {head2}
        </h1>
        <div className="flex items-center space-x-5 my-5">
          <div className="flex-shrink bg-white shadow-lg rounded-full p-3 flex items-center justify-center">
            <PiPlantFill className="h-5 w-5 text-green-500" />
          </div>
          <p>
            Eco-Friendly – Harness clean, renewable energy to reduce your carbon
            footprint and contribute to a greener planet.
          </p>
        </div>
        <div className="flex items-center space-x-5 my-5">
          <div className="flex-shrink bg-white shadow-lg rounded-full p-3 flex items-center justify-center">
            <GiReceiveMoney className="h-5 w-5 text-yellow-500" />
          </div>
          <p>
            Cost-Efficient – Save on energy bills with long-term cost savings as
            solar power reduces reliance on traditional electricity.
          </p>
        </div>
        <div className="flex items-center space-x-5 my-5">
          <div className="flex-shrink bg-white shadow-lg rounded-full p-3 flex items-center justify-center">
            <MdEngineering className="h-5 w-5 text-blue-500" />
          </div>
          <p>
            Low Maintenance – Once installed, solar panels require minimal
            upkeep, providing hassle-free energy for years.
          </p>
        </div>
        <div className="flex items-center space-x-5 my-5">
          <div className="flex-shrink bg-white shadow-lg rounded-full p-3 flex items-center justify-center">
            <AiOutlineStock className="h-5 w-5 text-green-500" />
          </div>
          <p>
            Future-Ready Investment – Solar systems are a forward-thinking
            investment that increases property value and prepares you for a
            sustainable future.
          </p>
        </div>
      </div>
    </div>
  );
}

WhySolar.propTypes = {
  head1: PropTypes.string.isRequired,
  head2: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
