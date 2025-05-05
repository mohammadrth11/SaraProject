import { SolutionsData } from "@/api/SolutionsData";
import Solutions from "../molecules/SolutionsCircular";

export default function OurProductSection() {
  return (
    <div
      className="OurProduct-Section h-[50vh] bg-[url('/Vector.jpg')] bg-cover bg-center relative  w-full flex items-center justify-between flex-col
pb-210 md:pb-0"
    >
      <div data-aos="fade-up" className="OurProduct-title">
        <h2 className="text-2xl pt-20 pb-20 md:text-4xl text-center pt-10">
          Our Products & Solutions – FY 2023 Revenues
        </h2>
      </div>
      <div className="OurProducts container flex flex-wrap justify-between gap-y-10">
        {SolutionsData?.map((ele) => (
          <Solutions percentage={ele.percentage} title={ele.title} />
        ))}
      </div>
    </div>
  );
}
