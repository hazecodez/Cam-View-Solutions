import { Label, TextInput } from "flowbite-react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function Testimonial() {
    const navigate = useNavigate()
  return (
    <div className="mt-24 flex flex-col md:flex-row items-start md:space-x-10">
      <div data-aos="zoom-in-right" className="md:w-5/12">
        <div className="flex items-center space-x-20 mb-5">
          <span className="border border-gray-300 w-14 absolute"></span>
          <h1 className="text-gray-400 tracking-widest text-sm">
            CLIENT TESTIMONIAL
          </h1>
        </div>
        <h1 className="font-semibold text-darken text-2xl lg:pr-40">
          What They Say?
        </h1>
        <p className="text-gray-500 my-5 lg:pr-36">
          Cam View Solutions has received numerous positive reviews from
          satisfied clients throughout Kerala.
        </p>
        <p className="text-gray-500 my-5 lg:pr-36">
          Many homeowners and businesses have greatly benefited from our
          innovative security and technology solutions.
        </p>
        <p className="text-gray-500 my-5 lg:pr-36">
          Have you experienced our services? We’d love to hear your feedback!
        </p>
        <button onClick={()=> navigate("/feedback")}  className="flex items-center space-x-3 pl-3 border-b border-l border-t border-blue-500 text-blue-500 font-medium my-4 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out rounded-full">
          <span>Write your assessment</span>
          <div className="border border-blue-500 h-14 w-14 rounded-full flex items-center justify-center">
          <FaArrowRightLong className="w-5 h-5" />
          </div>
        </button>
      </div>
      <div data-aos="zoom-in-left" className="md:w-7/12">
      <div className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="small" value="Your Name" />
        </div>
        <TextInput id="small" type="text" sizing="sm" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="base" value="Your Number or Email" />
        </div>
        <TextInput id="base" type="text" sizing="md" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="large" value="Your Review" />
        </div>
        <TextInput id="large" type="text" sizing="lg" />
      </div>
    </div>
      </div>
    </div>
  );
}
