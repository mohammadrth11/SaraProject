import React from "react";
import Emphasis from "./Emphasis";

export default function EmphasisSection() {
  return (
    <div className=" flex items-center gap-x-55">
      <div className="emphasis-image">
        <img src="../../../public/03.png" alt="emphasis-image!" />
      </div>
      <div className="emphasisSection-content">
        <h2 className="title text-4xl pb-5 ">Our Emphasis!</h2>
        <Emphasis />
        <Emphasis />
        <Emphasis />
        <Emphasis />
      </div>
    </div>
  );
}
