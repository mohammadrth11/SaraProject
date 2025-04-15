import React from "react";
import MainBtn from "../atoms/Buttoms";

export default function Header() {
  return (
    <div className=" grid grid-cols-2 place-items-center pt-30">
      <div className="header-content text-white">
        <h1 className="text-4xl font-boldstext-4xl pb-5">Sara Electrical</h1>
        <p>Now Automation is Available for B2B and B2C</p>
        <div className="header-buttoms my-32 grid grid-cols-2 gap-10">
          <MainBtn title="View More" link="#" color="red" />
          <MainBtn title="Our Projects" link="#" />
        </div>
      </div>
      <div className="header-image">
        <img src="../Sliders/16-Sara-El-533x786@x2.jpg" alt="header-image" />
      </div>
    </div>
  );
}
// test
