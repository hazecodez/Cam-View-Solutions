import { useState } from "react";
import { ImCross } from "react-icons/im";
import Button from "./Button";

export default function ShowProjects() {
  const [isModalOpen, setIsModalOpen] = useState(null);
  const openModal = (image) => {
    setIsModalOpen(image);
  };

  const closeModal = () => {
    setIsModalOpen(null);
  };
  return (
    <>
      <div data-aos="flip-up" className=" mx-auto text-center sm:mt-36 mt-24">
        <h1 className="font-bold text-darken my-3 text-3xl">
          <span className="text-blue-500">Our Completed Projects</span>
        </h1>
        <p className="leading-relaxed text-gray-500">
          Take a closer look at the projects we have completed across various
          sectors, from solar energy installations to advanced security and
          automation solutions. Our gallery of videos and photos highlights the
          quality and precision we bring to every project, demonstrating our
          dedication to delivering tailored solutions that meet our clients
          unique needs.
        </p>
      </div>

      <div className="md:flex mt-40 md:space-x-10 items-start space-y-6 md:space-y-0">
        <img
          className="relative rounded-lg z-40 w-full md:w-1/2 h-auto md:h-96 object-cover"
          src="src/assets/solar-17.webp"
          alt=""
          onClick={() => openModal("src/assets/solar-17.webp")}
        />
        <video
          className="rounded-lg z-40 relative w-full md:w-1/2 h-auto md:h-96 object-cover"
          src="src/assets/solar-video-4.mp4"
          muted
          loop
          autoPlay
        />
      </div>
      <div className="md:flex mt-6 md:space-x-10 items-start space-y-6 md:space-y-0">
        <img
          className="relative rounded-lg z-40 w-full md:w-1/2 h-auto md:h-96 object-cover"
          src="src/assets/solar-2.png"
          alt=""
          onClick={() => openModal("src/assets/solar-2.png")}
        />
        <video
          className="rounded-lg z-40 relative w-full md:w-1/2 h-auto md:h-96 object-cover"
          src="src/assets/solar-video-1.mp4"
          muted
          loop
          autoPlay
        />
      </div>
      <div className="md:flex mt-6 md:space-x-10 items-start space-y-6 md:space-y-0">
        <img
          className="relative rounded-lg z-40 w-full md:w-1/2 h-auto md:h-96 object-cover"
          src="src/assets/solar-11.jpg"
          alt=""
          onClick={() => openModal("src/assets/solar-11.jpg")}
        />
        <video
          className="rounded-lg z-40 relative w-full md:w-1/2 h-auto md:h-96 object-cover"
          src="src/assets/solar-video-2.mp4"
          muted
          loop
          autoPlay
        />
      </div>
      <div className="md:flex mt-6 md:space-x-10 items-start space-y-6 md:space-y-0">
        <img
          className="relative rounded-lg z-40 w-full md:w-1/2 h-auto md:h-96 object-cover"
          src="src/assets/solar-3.png"
          alt=""
          onClick={() => openModal("src/assets/solar-3.png")}
        />
        <video
          className="rounded-lg z-40 relative w-full md:w-1/2 h-auto md:h-96 object-cover"
          src="src/assets/solar-video-3.mp4"
          muted
          loop
          autoPlay
        />
      </div>
      <div className="md:flex mt-6 md:space-x-10 items-start space-y-6 md:space-y-0">
        <img
          className="relative rounded-lg z-40 w-full md:w-1/2 h-auto md:h-96 object-cover"
          src="src/assets/solar-16.webp"
          alt=""
          onClick={() => openModal("src/assets/solar-16.webp")}
        />
        <img
          className="relative rounded-lg z-40 w-full md:w-1/2 h-auto md:h-96 object-cover"
          src="src/assets/solar-5.jpg"
          alt=""
          onClick={() => openModal("src/assets/solar-5.jpg")}
        />
      </div>
      <div className="md:flex mt-6 md:space-x-10 items-start space-y-6 md:space-y-0">
        <img
          className="relative rounded-lg z-40 w-full md:w-1/2 h-auto md:h-96 object-cover"
          src="src/assets/solar-6.jpg"
          alt=""
          onClick={() => openModal("src/assets/solar-6.jpg")}
        />
        <img
          className="relative rounded-lg z-40 w-full md:w-1/2 h-auto md:h-96 object-cover"
          src="src/assets/solar-7.jpg"
          alt=""
          onClick={() => openModal("src/assets/solar-7.jpg")}
        />
      </div>
      <div className="md:flex mt-6 md:space-x-10 items-start space-y-6 md:space-y-0">
        <img
          className="relative rounded-lg z-40 w-full md:w-1/2 h-auto md:h-96 object-cover"
          src="src/assets/solar-8.jpg"
          alt=""
          onClick={() => openModal("src/assets/solar-8.jpg")}
        />
        <img
          className="relative rounded-lg z-40 w-full md:w-1/2 h-auto md:h-96 object-cover"
          src="src/assets/solar-9.jpg"
          alt=""
          onClick={() => openModal("src/assets/solar-9.jpg")}
        />
      </div>
      <div className="md:flex mt-6 md:space-x-10 items-start space-y-6 md:space-y-0">
        <img
          className="relative rounded-lg z-40 w-full md:w-1/2 h-auto md:h-96 object-cover"
          src="src/assets/solar-10.jpg"
          alt=""
          onClick={() => openModal("src/assets/solar-10.jpg")}
        />
        <img
          className="relative rounded-lg z-40 w-full md:w-1/2 h-auto md:h-96 object-cover"
          src="src/assets/solar-12.jpg"
          alt=""
          onClick={() => openModal("src/assets/solar-12.jpg")}
        />
      </div>
      <div className="md:flex mt-6 md:space-x-10 items-start space-y-6 md:space-y-0">
        <img
          className="relative rounded-lg z-40 w-full md:w-1/2 h-auto md:h-96 object-cover"
          src="src/assets/solar-18.webp"
          alt=""
          onClick={() => openModal("src/assets/solar-18.webp")}
        />
        <img
          className="relative rounded-lg z-40 w-full md:w-1/2 h-auto md:h-96 object-cover"
          src="src/assets/solar-14.webp"
          alt=""
          onClick={() => openModal("src/assets/solar-14.webp")}
        />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="relative">
            <img
              className="rounded-lg max-w-full max-h-screen"
              src={isModalOpen}
              alt=""
            />
            {/* Close Button */}
            <ImCross
              className="absolute top-4 right-4 text-white text-3xl bg-gray-800 p-2 rounded-full"
              onClick={closeModal}
            />
          </div>
        </div>
      )}

      <Button name="Contact Us" link="/contact" />
    </>
  );
}
