import React from "react";
import Header from "../organisms/Header";
import Navbar from "../organisms/Navbar";
import InfoSection from "../molecules/InfoSection";

export default function Hero() {
  return (
    <div className="h-screen bg-[url('/Back.png')] bg-cover bg-center relative  w-full">
      <Navbar />
      <Header />
      <InfoSection
        title="About Us"
        description="loremsdvavcbasjcbadbsvlkvnvldnv lskdv sdlv sv m,ssjkcbsjcbjscbjsbcjscbj"
        image="../../../public/01.png"
        direction="rtl"
      />
      <InfoSection
        title="CEO Message"
        description="loremsdvavcbasjcbadddddddddddddddddddddddddddddddddddddsjkcbsjcbjscbjsbcjscbj"
        image="../../../public/02.png"
        direction="ltr"
      />
    </div>
  );
}
