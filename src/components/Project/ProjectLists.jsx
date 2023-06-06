import Project from "./Project";
import data from "../../data.js";

const ProjectLists = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      {data.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectLists;
