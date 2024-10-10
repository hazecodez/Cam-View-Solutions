import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import FeaturedServices from "../Components/FeaturedServices";

export default function Home() {
  return (
    <div className="bg-[#ecf3f9]">
      <Header />
      <Banner/>
      <FeaturedServices/>
      <Footer />
    </div>
  );
}
