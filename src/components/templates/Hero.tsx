import React from "react";
import Header from "../organisms/Header";
import Navbar from "../organisms/Navbar";
import InfoSection from "../molecules/InfoSection";

export default function Hero() {
  return (
    <div className="h-screen bg-[url('/Back.png')] bg-cover bg-center relative  w-full">
      <Navbar />
      <Header />
    </div>
  );
}
