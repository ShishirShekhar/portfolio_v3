import Button from "../Button";

const Project = ({ project }) => {
  return (
    <div className="flex flex-col gap-2 border-2 border-black rounded-xl p-2 px-6 w-[600px]">
      <h1 className="text-2xl font-bold">{project.title}</h1>

      <div className="flex gap-2">
        {project.tech_stack.map((tech, index) => (
          <p key={index} className="bg-gray-400 py-2 px-3 text-white text-xs rounded-xl">{tech}</p>
        ))}
      </div>

      <p className="py-2">{project.description}</p>

      <div className="flex gap-4 text-sm">
        <Button to={project.github} value="Github" />
        <Button to={project.live} value="Live App" />
      </div>
    </div>
  );
};

export default Project;
