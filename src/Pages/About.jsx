import Footer from "../Components/Footer";
import Header from "../Components/Header";
import AboutCam from "../Components/AboutCam";

export default function About() {
  return (
    <div className="bg-[#ecf3f9]">
      <Header />
      <div className="container px-4 lg:px-8 mx-auto max-w-screen-xl text-gray-700 overflow-y-hidden overflow-x-hidden ">
        <AboutCam />
      </div>
      <Footer />
    </div>
  );
}
