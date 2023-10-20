import React from "react";

export default function Footer() {
  return (
    <div className="py-12 bg-sky-500 text-white mt-5 text-sm">
      <ul className="flex justify-center gap-x-5">
        <li>FAQs</li>
        <li>Privacy Policy</li>
        <li>Return Policy</li>
        <li>Terms & Conditions</li>
      </ul>
      <div>
        <p className="text-center mt-2 "> © Copyright 2023</p>
      </div>
    </div>
  );
}
