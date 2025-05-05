import { ChooseUsBoxData } from "@/api/ChooseUsBoxData";
import ChooseUsBox from "../molecules/ChooseUsBox";

import { useEffect, useState } from "react";
import { fetchWhyChooseUsData } from "@/api/fetchWhyChooseUsData";
import { fetchWhyChooseUsBoxData } from "@/api/fetchWhyChooseUsBoxData";

export default function ChooseUsSection() {
  const [WhyChooseUsData, setWhyChooseUsData] = useState<any[]>([]);
  const [WhyChooseUsBoxData, setWhyChooseUsBoxData] = useState<any[]>([]);

  useEffect(() => {
    fetchWhyChooseUsData().then(setWhyChooseUsData);
    fetchWhyChooseUsBoxData().then(setWhyChooseUsBoxData);
  }, []);

  return (
    <>
      {WhyChooseUsData.map((ele) => {
        const fields = ele?.fields;
        if (!fields) return null;
        const imageUrl = "https:" + fields?.image?.fields?.file?.url;
        return (
          <div
            data-aos="fade-up"
            className="container choose-us-section flex justify-between items-center gap-x-20 gap-y-5 flex-col-reverse md:flex-row "
          >
            <div className="choose-us-content w-full md:w-1/2">
              <h2 className="text-4xl pb-5">{fields?.title}</h2>
              <p className="pb-10">{fields?.description}</p>
              <div className="boxes flex flex-wrap  gap-10  justify-start">
                {WhyChooseUsBoxData.map((box) => {
                  const boxFields = box?.fields;
                  if (!boxFields) return null;

                  const boxImageUrl =
                    "https:" + boxFields?.icon?.fields?.file?.url;

                  return (
                    <ChooseUsBox
                      key={box.sys.id}
                      title={boxFields.title}
                      src={boxImageUrl}
                    />
                  );
                })}
              </div>
            </div>
            <div className="choose-us-image w-full md:w-1/2">
              <img src={imageUrl} alt="choose-us-image" className="w-full" />
            </div>
          </div>
        );
      })}
    </>
  );
}
