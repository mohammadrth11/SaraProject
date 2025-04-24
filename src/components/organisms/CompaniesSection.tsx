type CompaniesSectionProps = {
  logo: string;
  description1?: string;
  description2?: string;
  image?: string;
  direction?: "ltr" | "rtl";
  feature1: string;
  feature2: string;
  feature3?: string;
};

export default function CompaniesSection({
  logo,
  description1,
  description2,
  image,
  direction,
  feature1,
  feature2,
  feature3,
}: CompaniesSectionProps) {
  const isRtl = direction === "rtl";
  return (
    <section className="CompaniesSection pb-10 md:pb-0">
      <div
        className={`container flex  items-center justify-center flex-col md:flex-row  gap-x-20 gap-y-5   bg-[url('/Vector.jpg')] bg-cover bg-center relative ${
          isRtl ? "md:flex-row-reverse " : "mt-55 md:mt-0 "
        }`}
      >
        <div className={` w-full md:w-1/2 `}>
          <img src={image} className="relative" />
        </div>
        <div className={` w-full md:w-1/2`}>
          <img src={logo} alt="logo-company" className="logo pb-10" />
          <p className="pb-5">{description1}</p>
          <p className=" pb-5">{description2}</p>
          <div className="companyFeatuers flex flex-col md:flex-row flex-wrap gap-5 justify-start items-center pt-10">
            <img src={feature1} alt="CompanyFeatuerBox-pic" className="w-30" />
            <img src={feature2} alt="CompanyFeatuerBox-pic" className="w-30" />
            <img src={feature3} className="w-30" />
          </div>
        </div>
      </div>
    </section>
  );
}
