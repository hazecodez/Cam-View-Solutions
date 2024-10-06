import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
// import Categories from "../Components/Categories";
import FeaturedServices from "../Components/FeaturedServices";

export default function Home() {
  return (
    <div className="bg-[#ecf3f9]">
      <Header />
      <Banner/>
      {/* <Categories/> */}
      <FeaturedServices/>
      <Footer />
    </div>
  );
}
