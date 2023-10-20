import React from "react";
import Image from "next/image";
import TeandingCard from "../cards/teanding-card";
export default function Cetagory() {
  const cetagorys = [
    {
      name: "OFFERS",
      image:
        "https://www.chococraving.com/wp-content/uploads/2023/09/1685230-280x280.webp",
    },
    {
      name: "Chocolate Gift Pack",
      image:
        "https://www.chococraving.com/wp-content/uploads/2023/09/Chocolate-Gift-Pack-280x280.webp",
    },
    {
      name: "Surprise Gift",
      image:
        "https://www.chococraving.com/wp-content/uploads/2023/09/Surprise-gift-280x280.webp",
    },
    {
      name: "Cereals",
      image:
        "https://www.chococraving.com/wp-content/uploads/2023/09/Cereals-280x280.webp",
    },
    {
      name: "Chips & Cookies",
      image:
        "https://www.chococraving.com/wp-content/uploads/2023/09/Chips-Cookies-280x280.webp",
    },
    {
      name: "T-Shirt",
      image:
        "https://www.chococraving.com/wp-content/uploads/2023/09/tshirt-280x280.webp",
    },
  ];
  const cetagorys2 = [
    {
      name: "Surprise box Handmade",
      image:
        "https://www.chococraving.com/wp-content/uploads/2023/09/Surprise-box-Handmade-280x280.webp",
    },
    {
      name: "Surprise box Handmade",
      image:
        "https://www.chococraving.com/wp-content/uploads/2023/09/Gadget-Accessories-280x280.webp",
    },
    {
      name: "Gadget Accessories",
      image:
        "https://www.chococraving.com/wp-content/uploads/2023/09/working-280x280.webp",
    },
    {
      name: "Event and Props",
      image:
        "https://www.chococraving.com/wp-content/uploads/2023/09/Event-and-Props-280x280.webp",
    },

    {
      name: "Chips & Cookies",
      image:
        "https://www.chococraving.com/wp-content/uploads/2023/09/Chips-Cookies-280x280.webp",
    },
    {
      name: "T-Shirt",
      image:
        "https://www.chococraving.com/wp-content/uploads/2023/09/tshirt-280x280.webp",
    },
  ];
  const cetagorys3 = [
    {
      name: "OFFERS",
      image:
        "https://www.chococraving.com/wp-content/uploads/2023/09/1685230-280x280.webp",
    },
    {
      name: "Chocolate Gift Pack",
      image:
        "https://www.chococraving.com/wp-content/uploads/2023/09/Chocolate-Gift-Pack-280x280.webp",
    },
    {
      name: "Surprise Gift",
      image:
        "https://www.chococraving.com/wp-content/uploads/2023/09/Surprise-gift-280x280.webp",
    },
    {
      name: "Cereals",
      image:
        "https://www.chococraving.com/wp-content/uploads/2023/09/Cereals-280x280.webp",
    },
    {
      name: "Chips & Cookies",
      image:
        "https://www.chococraving.com/wp-content/uploads/2023/09/Chips-Cookies-280x280.webp",
    },
    {
      name: "T-Shirt",
      image:
        "https://www.chococraving.com/wp-content/uploads/2023/09/tshirt-280x280.webp",
    },
  ];
  return (
    <div className="px-16 py-24 bg-[#f8f6f6]">
      <div className="text-2xl font-semibold flex border-b-2 mb-8  justify-between">
        <h1 className="border-b-2 border-gray-300">TRENDING CATEGORY</h1>
        <h1>Browse all {">"}</h1>
      </div>
      <div className="flex  ">
        <TeandingCard
          cetagorys={cetagorys}
          image={
            "https://www.chococraving.com/wp-content/uploads/2023/08/Gadget-Accessories-1.jpg"
          }
        />
        <TeandingCard
          cetagorys={cetagorys2}
          image={
            "https://www.chococraving.com/wp-content/uploads/2023/08/Surprise-Gift-Hampers.jpg"
          }
        />
        <TeandingCard
          cetagorys={cetagorys}
          image={
            "https://www.chococraving.com/wp-content/uploads/2023/08/Handmade-Surprice-Box.jpg"
          }
        />
      </div>
    </div>
  );
}
