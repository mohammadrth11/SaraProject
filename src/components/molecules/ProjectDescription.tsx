import MainBtn from "../atoms/Buttoms";
type ProjectDescriptionProps = {
  title: string;
  description: string;
  Client: string;
  Consultant: string;
  MainContractor: string;
  MepContractor: string;
  SystemProvider: string;
  ProjectStatus: string;
};
export default function ProjectDescription({
  title,
  description,
  Client,
  Consultant,
  MainContractor,
  MepContractor,
  SystemProvider,
  ProjectStatus,
}: ProjectDescriptionProps) {
  return (
    <div className="ProjectDescription container flex flex-col md:flex-row items-center justify-between gap-15">
      <div className="project-image w-full md:w-1/2 ">
        <img src="../../../public/09.png" alt="project-image" />
      </div>
      <div className="project-description w-full md:w-1/2">
        <h2 className="text-4xl pb-10">{title}</h2>
        <p className="pb-10">{description}</p>
        <div className="project-info flex flex-row items-center justify-start gap-x-15 gap-y-5 pb-10">
          <ul>
            <li>Client</li>
            <li>Consultant</li>
            <li>Main Contractor</li>
            <li>MepContractor</li>
            <li>SystemProvider</li>
            <li>ProjectStatus</li>
          </ul>
          <ul>
            <li>{Client}</li>
            <li>{Consultant}</li>
            <li>{MainContractor}</li>
            <li>{MepContractor}</li>
            <li>{SystemProvider}</li>
            <li>{ProjectStatus}</li>
          </ul>
        </div>
        <div className="project-footer flex flex col md:flex-row items-center justify-between gap-5 ">
          <MainBtn title="Contact Us" link="#" color="red" />
          <div className="social-media flex flex-row items-center justify-between gap-5">
            <a href="#">
              <img
                src="../../../public/social-media-10.svg"
                alt="social-media-pic"
              />
            </a>
            <a href="#">
              <img
                src="../../../public/social-media-20.svg"
                alt="social-media-pic"
              />
            </a>
            <a href="#">
              <img
                src="../../../public/social-media-30.svg"
                alt="social-media-pic"
              />
            </a>
            <a href="#">
              <img
                src="../../../public/social-media-40.svg"
                alt="social-media-pic"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
