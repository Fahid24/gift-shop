import { handmadeCategories } from "@/fake-data";
import React from "react";
import ProductCard from "../cards/product-card";

export default function HandMadeSurpriseBox() {
  return (
    <div className="lg:px-16 bg-[#f8f6f6]">
      <div className="text-2xl font-semibold flex border-b-2 mb-8  justify-between">
        <h1 className=" border-gray-300">HANDMADE SURPRISE BOX</h1>
        <h1>Browse all {">"}</h1>
      </div>
      <div className="grid grid-cols-5 gap-4 pb-10">
        {handmadeCategories?.slice(0, 5)?.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </div>
  );
}
