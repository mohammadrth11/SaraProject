import React from "react";

type InfoSectionProps = {
  title: string;
  description1?: string;
  description2?: string;
  description3?: string;
  image?: string;
  direction?: "ltr" | "rtl";
};

export default function InfoSection({
  title,
  description1,
  description2,
  description3,
  image,
  direction = "ltr",
}: InfoSectionProps) {
  const isRtl = direction === "ltr";

  return (
    <div
      className={`flex items-center justify-center flex-col md:flex-row  pt-40  gap-y-0  ${
        isRtl ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className={` w-full   ${isRtl ? "flex  justify-end" : ""}`}>
        <img src={image} className="w-full" />
      </div>
      <div
        className={` w-full  pt-15 pl-10 md:pt-0`}
      >
        <h2 className="text-4xl font-bold pb-6">{title}</h2>
        <p className="pb-5">{description1}</p>
        <p className=" pb-5">{description2}</p>
        <p className=" ">{description3}</p>
      </div>
    </div>
  );
}
