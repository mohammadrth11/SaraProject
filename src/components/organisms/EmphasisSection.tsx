import { fetchEmphasisBoxData } from "@/api/fetchEmphasisBoxData";
import { fetchEmphasisData } from "@/api/fetchEmphasisData";
import { useEffect, useState } from "react";
import Emphasis from "../molecules/EmphasisBox";

export default function EmphasisSection() {
  const [emphasisSections, setEmphasisSections] = useState<any[]>([]);
  const [emphasisBoxSections, setEmphasisBoxSections] = useState<any[]>([]);

  useEffect(() => {
    fetchEmphasisData().then(setEmphasisSections);
    fetchEmphasisBoxData().then(setEmphasisBoxSections);
  }, []);

  return (
    <>
      {emphasisSections.map((section) => {
        const fields = section?.fields;
        if (!fields) return null;

        const imageUrl = "https:" + fields?.image?.fields?.file?.url;

        return (
          <div
            data-aos="zoom-in"
            key={section.sys.id}
            className="container flex items-center gap-x-20 gap-y-5 flex-col pt-5 md:flex-row"
          >
            <div className="emphasis-image w-full md:w-1/2">
              <img src={imageUrl} alt="emphasis-image!" />
            </div>

            <div className="emphasisSection-content w-full md:w-1/2">
              <h2 className="title text-4xl pb-7 ">{fields?.title}</h2>

              {emphasisBoxSections.map((box) => {
                console.log("*************");
                console.log(box);
                console.log("*************");

                const boxFields = box?.fields;
                if (!boxFields) return null;

                const boxImageUrl =
                  "https:" + boxFields?.emphasisBoxImage?.fields?.file?.url;

                return (
                  <Emphasis
                    key={box.sys.id}
                    src={boxImageUrl}
                    title={boxFields.emphasisBoxTitle}
                    description={boxFields.emphasisBoxDescription}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}
