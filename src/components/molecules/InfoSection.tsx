import React from "react";

type InfoSectionProps = {
  title: string;
  description: string;
  image: string;
  direction?: "ltr" | "rtl";
};

export default function InfoSection({
  title,
  description,
  image,
  direction = "ltr",
}: InfoSectionProps) {
  const isRtl = direction === "ltr";

  return (
    <div
      className={`flex flex-col md:flex-row items-center py-16 gap-10 ${
        isRtl ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="">
        <img src={image} />
      </div>
      <div className="px-4">
        <h2 className="text-4xl font-bold pb-6">{title}</h2>
        <p className=" leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
