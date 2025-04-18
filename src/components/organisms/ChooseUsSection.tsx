import { ChooseUsBoxData } from "@/api/ChooseUsBoxData";
import ChooseUsBox from "../molecules/ChooseUsBox";

export default function ChooseUsSection() {
  return (
    <div className="container choose-us-section flex justify-between items-center gap-x-20 gap-y-5 flex-col-reverse md:flex-row ">
      <div className="choose-us-content w-full md:w-1/2">
        <h2 className="text-4xl pb-5">Why Choose Us</h2>
        <p className="pb-10">
          Sara Electrical is a professionally managed company widely known in
          the United Arab Emirates and the Gulf Regions. Sara Electrical was
          founded in the year 1994 by Mr Ghassan Mousa, whose keen business
          acumen has brought the to its present position thereby widening its
          horizons, and reinforcing its stand in the electrical materials, LV &
          Control Switchgear panel building, industrial & building automation
          systems & smart solutions provider, energy management systems and
          industrial products market.
        </p>
        <div className="boxes flex flex-wrap  gap-10  justify-start">
          {ChooseUsBoxData?.map((ele) => (
            <ChooseUsBox title={ele.title} src={ele.src} />
          ))}
        </div>
      </div>
      <div className="choose-us-image w-full md:w-1/2">
        <img
          src="../../../public/04.png"
          alt="choose-us-image"
          className="w-full"
        />
      </div>
    </div>
  );
}
