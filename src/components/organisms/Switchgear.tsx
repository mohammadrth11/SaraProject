import { SwitchgearBoxData } from "@/api/SwitchgearBoxData";
import SwitchgearBox from "../molecules/SwitchgearBox";

export default function Switchgear() {
  return (
    <section className="Switchgear container py-10">
      <h2 className="text-4xl text-center pb-15">
        Switchgear Assembly and Quality Excellency
      </h2>
      <div className="SwitchgearBoxes grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {SwitchgearBoxData?.map((ele) => (
          <SwitchgearBox src={ele.src} description={ele.description} />
        ))}
      </div>
    </section>
  );
}
