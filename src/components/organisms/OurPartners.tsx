import { OurPartnersData } from "@/api/OurPartnersData";
import Partners from "../molecules/Partners";

export default function OurPartners() {
  return (
    <section className="OurPartners container py-15">
      <h2 className="text-4xl  text-center pb-15">Our Partners</h2>
      <div className="partners flex flex-row flex-wrap justify-between gap-10">
        {OurPartnersData?.map((ele) => (
          <Partners
            background={ele.background}
            logo={ele.logo}
            title={ele.title}
            description={ele.description}
          />
        ))}
      </div>
    </section>
  );
}
