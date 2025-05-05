import { ProjectData } from "@/api/ProjecrData";
import { categoriesData } from "@/api/ProjectsCategoriesData";
import DynamicHeader from "@/components/molecules/DynamicHeader";
import Project from "@/components/molecules/Project";
import { useState } from "react";
import { Link } from "react-router-dom";
// import Project from "@/components/molecules/project";

export default function Projects() {
  const [activeCategory, setactiveCategory] = useState("All");

  const filteredProjects =
    activeCategory == "All"
      ? ProjectData
      : ProjectData.filter((ele) => ele.category === activeCategory);
  return (
    <>
      <DynamicHeader
        src="003.jpg"
        title="Projects"
        description="At Sara Electrical, our mission is to empower individuals, businesses, and communities through excellence."
      />
      <div className="container text-center pt-10">
        <h2 className="text-5xl pb-5">Our Finished Works</h2>
        <p className="pb-5">
          Anyway, you still use Lorem Ipsum and rightly so, as it will always
          have
        </p>
        <ul className="projectsList container flex flex-wrap justify-between gap-y-5">
          {categoriesData?.map((ele) => (
            <li>
              <a
                href={ele.src}
                className=" hover:text-blue-900 transition duration-10"
                onClick={() => setactiveCategory(ele.title)}
              >
                {ele.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="projectsList flex items-center justify-between flex-wrap gap-y-15 py-10">
          {filteredProjects?.map((ele) => (
            <Link to={`/Projects/${ele.id}`}>
              <Project src={ele.src} title={ele.title} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
