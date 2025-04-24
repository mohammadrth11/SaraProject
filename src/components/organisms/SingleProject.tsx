import { useParams } from "react-router-dom";
import { ProjectData } from "@/api/ProjecrData";
import DynamicHeader from "../molecules/DynamicHeader";
import ProjectDescription from "../molecules/ProjectDescription";

export default function SingleProject() {
  const { projectId } = useParams();
  const project = ProjectData.find((ele) => ele.id === Number(projectId));

  if (!project) return <p>Project not found</p>;

  return (
    <>
      <DynamicHeader
        src={project.src}
        title={project.title}
        description="At Sara Electrical, our mission is to empower individuals, businesses, and communities through excellence."
      />
      <ProjectDescription
        title={project.title}
        description={project.description}
        Client={project.Client}
        Consultant={project.Consultant}
        MainContractor={project.MainContractor}
        MepContractor={project.MepContractor}
        ProjectStatus={project.ProjectStatus}
        SystemProvider={project.SystemProvider}
      />
    </>
  );
}
