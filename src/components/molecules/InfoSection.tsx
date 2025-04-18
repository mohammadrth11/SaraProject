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
  direction = "rtl",
}: InfoSectionProps) {
  const isRtl = direction === "rtl";

  return (
    <div
      className={`flex  items-center justify-center flex-col md:flex-row  gap-x-20 gap-y-5 pb-5  bg-[url('/Vector.jpg')] bg-cover bg-center relative ${
        isRtl ? "md:flex-row-reverse " : "mt-55 md:mt-0 "
      }`}
    >
      <div className={` w-full md:w-1/2 `}>
        <img src={image} className="w-full" />
      </div>
      <div className={` w-full md:w-1/2`}>
        <h2 className="text-4xl font-bold pb-6">{title}</h2>
        <p className="pb-5">{description1}</p>
        <p className=" pb-5">{description2}</p>
        <p className=" ">{description3}</p>
      </div>
    </div>
  );
}
