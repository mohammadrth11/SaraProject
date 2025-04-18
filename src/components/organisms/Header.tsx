import React from "react";
import MainBtn from "../atoms/Buttoms";

export default function Header() {
  return (
    <header className="container h-screen flex justify-between  items-center flex-col md:flex-row gap-x-10   pt-33 md:pt-0">
      <div className="header-content text-white">
        <h1 className="text-4xl font-boldstext-4xl pb-5">Sara Electrical</h1>
        <p>Now Automation is Available for B2B and B2C</p>
        <div className="flex gap-x-10 my-10">
          <MainBtn title="View More" link="#" color="red" />
          <MainBtn title="Our Projects" link="#" />
        </div>
      </div>
      <div className="header-image">
        <img
          src="../Sliders/16-Sara-El-533x786@x2.jpg"
          alt="header-image"
          className=" w-90 md:w-full  max-w-md"
        />
      </div>
    </header>
  );
}
// test
