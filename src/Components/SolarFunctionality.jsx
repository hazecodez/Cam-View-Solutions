import { PiSolarPanelDuotone } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

export default function SolarFunctionality() {
  const navigate = useNavigate()
  const functionalities = [
    {
      head: "Documentation & Contracts",
      data: `Managing the documentation and contracts related to solar panel
            installation can often be overwhelming. Our dedicated team
            simplifies this process, handling all necessary paperwork and
            agreements to ensure a smooth and hassle-free experience for our
            clients.`,
    },
    {
      head: "Site Suitability Assessment",
      data: `Assessing your property’s suitability for solar panel installation is 
      essential for maximizing energy efficiency. Our experts conduct comprehensive 
      evaluations to determine the best placement and configuration, ensuring that 
      your solar system operates at its full potential while meeting your specific 
      energy needs.`,
    },
    {
      head: "Installation & Regulatory Compliance",
      data: `Managing the installation of solar panels while adhering to regulatory 
      requirements can be daunting. Our team expertly navigates the necessary permits 
      and compliance standards, overseeing the entire process to ensure a seamless 
      installation that meets all local regulations and industry best practices.`,
    },
    {
      head: "Grid Connection",
      data: `Connecting your solar panel system to the grid is a crucial phase in
       maximizing its benefits. Our experienced team oversees the entire integration
        process, ensuring a smooth connection that facilitates efficient energy transfer
         and allows you to take full advantage of solar power.`,
    },
    {
      head: "Powering Up with Solar",
      data: `Unlock the potential of clean, renewable energy through our expert solar
       panel installation services. Embrace sustainable living by harnessing the sun's power,
        transforming your energy consumption and illuminating your life with environmentally
         friendly solutions.`,
    },
    {
      head: "Performance Monitoring & Maintenance",
      data: `Ensuring the long-term efficiency of your solar panel system is vital for 
        maximizing its benefits. Our team provides ongoing performance monitoring and maintenance 
        services to keep your system operating at peak capacity. We proactively address any issues and 
        conduct regular check-ups, giving you peace of mind and confidence in your investment.`,
    },
  ];
  return (
    <>
      <div data-aos="flip-up" className=" mx-auto text-center sm:mt-36 mt-24">
        <h1 className="font-bold text-darken my-3 text-3xl">
          Optimizing <span className="text-blue-500">Solar Energy</span>{" "}
          Installation and Site Suitability.
        </h1>
        <p className="leading-relaxed text-gray-500">
          To harness the full potential of solar energy, understanding
          installation and site suitability is vital. Our expert team assesses
          your property to ensure optimal placement and installation of solar
          panels, maximizing efficiency and long-term benefits for both
          residential and commercial applications.
        </p>
      </div>

      <div className="grid grid-cols md:grid-cols-3 gap-14 md:gap-5 mt-20">
        {functionalities.map((data, index) => (
          <div
            key={index}
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
              {data.head}
            </h1>
            <p className="px-4 text-gray-500">{data.data}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col bg-blue-200 mt-10 rounded-lg sm:items-center ">
     
        <h1 className="pt-12 text-4xl">
        Get a quote for your upcoming project
        </h1>
       <div className="flex justify-between gap-12">
       <button
          onClick={()=> navigate("/contact")}
          data-aos="flip-up"
          className="px-5 py-3 border border-blue-500 text-blue-500 font-medium my-14 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out rounded-full mx-auto block"
        >
          Contact Us
        </button>
        <button
          onClick={()=> navigate("/projects")}
          data-aos="flip-up"
          className="px-5 py-3 border border-blue-500 text-blue-500 font-medium my-14 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out rounded-full mx-auto block"
        >
          See our projects
        </button>
       </div>
      </div>
        
    </>
  );
}
