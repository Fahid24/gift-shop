import { Carousel } from "antd";
import Image from "next/image";
import React from "react";

export default function Slider() {
  return (
    <Carousel autoplay fade>
      <Image src={"/assets/img8.jpg"} height={1000} width={5000} />
      <Image src={"/assets/img2.jpg"} height={1000} width={5000} />
    </Carousel>
  );
}
