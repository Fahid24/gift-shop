import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FooterDescription from "@/components/footerDesc";
import Slider from "@/components/slider";
import PopularCategories from "@/components/popularCategories";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Slider />
      <PopularCategories />
      <FooterDescription />
      <Footer />
    </div>
  );
}
