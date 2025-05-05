import { useEffect, useState } from "react";
import { fetchHistoryAndExcellenceData } from "@/api/fetchHistoryAndExcellenceData";

export default function History() {
  const [historyAndExcellenceData, setHistoryAndExcellenceData] = useState<
    any[]
  >([]);

  useEffect(() => {
    fetchHistoryAndExcellenceData().then(setHistoryAndExcellenceData);
  }, []);
  return historyAndExcellenceData?.map((ele) => {
    console.log(ele);
    const fields = ele?.fields;
    if (!fields) return null;

    const imageUrl = "https:" + fields?.image?.fields?.file?.url;

    return (
      <div
        data-aos="fade-up"
        className="history-section container pt-20 flex flex-col items-center"
      >
        <div className="history-section-title pb-15">
          <h2 className="text-4xl text-center">{fields.title}</h2>
        </div>
        <div className="history-section-image">
          <img
            src={imageUrl}
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
  });
}
