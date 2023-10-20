import Image from "next/image";
import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg hover:shadow ">
      <div className="w-full">
        <Image
          src={product?.image}
          height={100}
          width={100}
          className="w-full"
        />
      </div>

      <div className="px-2 my-2">
        <h3>{product?.name?.slice(0, 40)} ...</h3>
        <p className="mt-2">
          {" "}
          {product?.cutPrice?.length ? (
            <del className="text-red-500">${product?.cutPrice}</del>
          ) : (
            ""
          )}{" "}
          <span className="font-semibold">${product?.price}</span>
        </p>
      </div>
      <p className="cursor-pointer hover:text-sky-500 border-t px-3 py-2 text-center mt-3">
        See more
      </p>
    </div>
  );
}
