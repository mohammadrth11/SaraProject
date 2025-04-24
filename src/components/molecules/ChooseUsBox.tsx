import React from "react";

type ChooseUsBoxInfo = {
  title: string;
  src: string;
};

export default function ChooseUsBox({ title, src }: ChooseUsBoxInfo) {
  return (
    <div
      className="ChooseUsBox w-30 h-30 bg-gradient-to-br  from-[#FF0000] to-[#191970]
  flex items-center justify-center flex-col p-2"
    >
      <div className="ChooseUsBox-icon">
        <img src={src} alt="ChooseUsBox-icon" className="w-full" />
      </div>
      <div className="ChooseUsBox-title pt-3 text-white  text-center text-sm">
        <h3>{title}</h3>
      </div>
    </div>
  );
}
0;
