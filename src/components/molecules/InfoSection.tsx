type InfoSectionProps = {
  title: string;
  firstPara?: string;
  secondPara?: string;
  thirdPara?: string;
  fourthPara?: string;
  fifthPara?: string;
  sixPara?: string;
  image?: string;
  direction?: "ltr" | "rtl";
};

export default function InfoSection({
  title,
  firstPara,
  secondPara,
  thirdPara,
  fourthPara,
  fifthPara,
  sixPara,
  image,
  direction = "rtl",
}: InfoSectionProps) {
  const isRtl = direction === "rtl";

  return (
    <div
      data-aos="fade-up"
      className={` container flex  items-center justify-center flex-col md:flex-row  gap-x-20 gap-y-5 pb-5  bg-[url('/Vector.jpg')] bg-cover bg-center relative ${
        isRtl ? "md:flex-row-reverse " : "mt-55 md:mt-0 "
      }`}
    >
      <div className={` w-full md:w-1/2 `}>
        <img src={image} className="w-full" />
      </div>
      <div className={` w-full md:w-1/2`}>
        <h2 className="text-4xl font-bold pb-6">{title}</h2>
        <p className="pb-5">{firstPara}</p>
        <p className=" pb-5">{secondPara}</p>
        <p className=" pb-5">{thirdPara}</p>
        <p className=" pb-5">{fourthPara}</p>
        <p className=" pb-5">{fifthPara}</p>
        <p className=" ">{sixPara}</p>
      </div>
    </div>
  );
}
