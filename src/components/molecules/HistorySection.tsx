import React from "react";

export default function History() {
  return (
    <div className="history-section container pt-20 flex flex-col items-center">
      <div className="history-section-title pb-15">
        <h2 className="text-4xl text-center">History & Excellence</h2>
      </div>
      <div className="history-section-image">
        <img
          src="/History-image.svg"
          alt="history-section-desktop"
          className="hidden md:block w-full"
        />
        <img
          src="/History-Vertical2.png"
          alt="history-section-mobile"
          className="block md:hidden w-full"
        />
      </div>
    </div>
  );
}
