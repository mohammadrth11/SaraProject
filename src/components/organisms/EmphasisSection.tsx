import { EmphasisInfo } from "@/api/emphasisData";
import Emphasis from "../molecules/Emphasis";

export default function EmphasisSection() {
  return (
    <div className="container flex items-center gap-x-20 gap-y-5 flex-col pt-5 md:flex-row">
      <div className="emphasis-image w-full md:w-1/2">
        <img src="../../../public/03.png" alt="emphasis-image!" />
      </div>
      <div className="emphasisSection-content w-full md:w-1/2">
        <h2 className="title text-4xl pb-7 ">Our Emphasis!</h2>

        {EmphasisInfo?.map((ele, index) => (
          <Emphasis
            key={index}
            src={ele.Src}
            title={ele.Title}
            description={ele.Description}
          />
        ))}
      </div>
    </div>
  );
}
