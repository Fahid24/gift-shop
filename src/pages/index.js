import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FooterDescription from "@/components/footerDesc";
import Slider from "@/components/slider";
import PopularCategories from "@/components/popularCategories";

import Cetagory from "@/components/sections/cetagory";
import SurpriseGiftCollection from "@/components/sections/surprise-gift-collection";
import HandMadeSurpriseBox from "@/components/sections/handmade-surpise-box";
import GadgetGearItems from "@/components/sections/gadget-gear-items";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Slider />
      <Cetagory />
      <SurpriseGiftCollection />
      <HandMadeSurpriseBox />
      <GadgetGearItems />
      <PopularCategories />
      <FooterDescription />
      <Footer />
    </div>
  );
}
