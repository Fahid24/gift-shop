import React from "react";
import Image from "next/image";
export default function TeandingCard({ cetagorys, image }) {
  return (
    <div className="grid grid-cols-3 gap-8 ">
      <div className="grid grid-cols-3 col-span-3 mb-8 mr-3 gap-3">
        {cetagorys.map((cetagory) => (
          <div className="text-sm  px-3 py-2 rounded bg-white   text-center font-semibold  grid gap-2 justify-items-center">
            <img
              width={50}
              height={50}
              src={cetagory.image}
              alt={cetagory.name}
            />
            <h4>{cetagory.name}</h4>
          </div>
        ))}
      </div>
      <div className="col-span-3">
        <img src={image} className="bg-slate-100" alt="" />
      </div>
    </div>
  );
}
