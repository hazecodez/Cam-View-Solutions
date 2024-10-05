import { useNavigate } from "react-router-dom";

export default function Banner() {
  const navigate = useNavigate();
  return (
    <div className="bg-cream pt-20">
      <div className="max-w-screen-xl px-8 mx-auto flex flex-col lg:flex-row items-start">
        <div className="flex flex-col w-full lg:w-6/12 justify-center lg:pt-24 items-start text-center lg:text-left mb-5 md:mb-0">
          <h1
            data-aos="fade-right"
            data-aos-once="true"
            className="my-4 text-5xl font-bold leading-tight text-darken"
          >
            Welcom to <span className="text-blue-500">Cam View</span> Solutions
          </h1>
          <p
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
            className="leading-normal text-2xl mb-8"
          >
            We are dedicated to providing high-quality solar panel installation
            services in Kerala. We believe in generating and storing clean,
            eco-friendly energy to help you start saving today.
          </p>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="700"
            className="w-full md:flex items-center justify-center lg:justify-start md:space-x-5"
          >
            <button className="lg:mx-0 bg-blue-500 text-white text-xl font-bold rounded-full py-4 px-9 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
              Learn More
            </button>
            <div className="flex items-center justify-center space-x-3 mt-5 md:mt-0 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
              <button className="bg-white w-14 h-14 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 ml-2"
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
              <a
                href="https://www.youtube.com/@camviewsolutions"
                className="cursor-pointer"
              >
                Watch our works
              </a>
            </div>
          </div>
        </div>
        {/* <!--Right Col--> */}
        <div className="w-full lg:w-6/12 lg:-mt-10 relative" id="girl">
          <img
            data-aos="fade-up"
            data-aos-once="true"
            className="w-10/12 mx-auto 2xl:-mb-20"
            src="src/assets/man.png"
          />
          {/* <!-- calendar --> */}
          {/* <div
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-once="true"
            className="absolute top-20 -left-6 sm:top-32 sm:left-10 md:top-40 md:left-16 lg:-left-0 lg:top-52 floating-4"
          >
            <img
              className="bg-white bg-opacity-80 rounded-lg h-12 sm:h-16"
              src="src/assets/calendar.svg"
            />
          </div> */}

          {/* <!-- ux class --> */}
          {/* <div
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-once="true"
            className="absolute bottom-14 -left-4 sm:left-2 sm:bottom-20 lg:bottom-24 lg:-left-4 floating"
          >
            <img
              className="bg-white bg-opacity-80 rounded-lg h-20 sm:h-28"
              src="src/assets/ux-class.svg"
              alt=""
            />
          </div> */}
          {/* <!-- congrats --> */}
          {/* <div
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-once="true"
            className="absolute bottom-20 md:bottom-48 lg:bottom-52 -right-6 lg:right-8 floating-4"
          >
            <img
              className="bg-white bg-opacity-80 rounded-lg h-12 sm:h-16"
              src="src/assets/congrat.svg"
              alt=""
            />
          </div> */}
        </div>
      </div>
      <div className="text-white -mt-14 sm:-mt-24 lg:-mt-36 z-40 relative">
        <svg
          className="xl:h-40 xl:w-full"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            fill="currentColor"
          ></path>
        </svg>
        <div className="bg-white w-full h-20 -mt-px"></div>
      </div>
    </div>
  );
}
