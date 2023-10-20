import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FooterDescription from "@/components/footerDesc";
import Slider from "@/components/slider";
import PopularCategories from "@/components/popularCategories";

import Cetagory from "@/components/sections/cetagory";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Slider />
      <Cetagory />
      <PopularCategories />
      <FooterDescription />
      <Footer />
    </div>
  );
}
