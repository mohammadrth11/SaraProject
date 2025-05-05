import EmphasisSection from "@/components/organisms/EmphasisSection";
import InfoSection from "@/components/molecules/InfoSection";
import Hero from "@/components/templates/home/Hero";
import { infoSections } from "@/api/infoSectionsData";
import ChooseUsSection from "@/components/organisms/ChooseUsSection";
import History from "@/components/molecules/HistorySection";
import WhereWeOperateSection from "@/components/molecules/WhereWeOperateSection";
import OurProductSection from "@/components/organisms/OurProductSection";
import PartnersSections from "@/components/organisms/PartnersSections";

import { useEffect, useState } from "react";
import { fetchInfoSections } from "../api/fetchInfoSections";

function Home() {
  const [sections, setSections] = useState<any[]>([]);

  useEffect(() => {
    fetchInfoSections().then(setSections);
  }, []);

  return (
    <div className="">
      <Hero />

      {sections.map((section) => {
        console.log(section);
        const fields = section?.fields;
        if (!fields) return null;

        const imageUrl = "https:" + fields.image?.fields?.file?.url;

        return (
          <InfoSection
            key={section.sys.id}
            title={fields.title}
            firstPara={fields.description1}
            image={imageUrl}
            secondPara={fields.description2}
            thirdPara={fields.description3}
            direction={fields.direction}
          />
        );
      })}

      {/* {infoSections.map((section, index) => (
        <InfoSection
          key={index}
          title={section.title}
          description1={section.description1}
          description2={section.description2}
          description3={section.description3}
          image={section.image}
          direction={section.direction}
        />
      ))} */}

      <EmphasisSection />
      <ChooseUsSection />
      <History />
      <WhereWeOperateSection />
      <OurProductSection />
      <PartnersSections />
    </div>
  );
}

export default Home;
