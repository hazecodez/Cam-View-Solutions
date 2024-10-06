import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";
import OurServices from "../Components/OurServices";

export default function Home() {
  return (
    <div className="bg-[#ecf3f9]">
      <Header />
      <Banner/>
      <Categories/>
      <OurServices/>
      <Footer />
    </div>
  );
}
