import Footer from "../Components/Footer";
import Header from "../Components/Header";
import SolarFunctionality from "../Components/SolarFunctionality";
import SolarHeader from "../Components/SolarHeader";
import WhySolar from "../Components/WhySolar";

export default function Solar() {
  return (
    <div className="bg-[#ecf3f9]">
      <Header />
      <div className="container px-4 lg:px-8 mx-auto max-w-screen-xl text-gray-700 overflow-y-hidden overflow-x-hidden">
        <SolarHeader />
        <WhySolar head1={"Why Solar Energy is the Future?"} head2={""} image={"src/assets/solar-11.jpg"}/>
        <SolarFunctionality/>
      </div>
      <Footer />
    </div>
  );
}
