import Button from "../Button";

const Project = () => {
  return (
    <div className="flex flex-col gap-2 border-2 border-black rounded-xl p-2 w-[600px]">
      <h1 className="text-2xl font-bold">PETCLUB - Social Media Application</h1>

      <div className="flex justify-between w-1/2 gap-2">
        <p className="bg-gray-400 py-2 px-3 text-white text-xs rounded-xl">Redux</p>
        <p className="bg-gray-400 py-2 px-3 text-white text-xs rounded-xl">Toolkit</p>
        <p className="bg-gray-400 py-2 px-3 text-white text-xs rounded-xl">MERN</p>
        <p className="bg-gray-400 py-2 px-3 text-white text-xs rounded-xl">Stack</p>
        <p className="bg-gray-400 py-2 px-3 text-white text-xs rounded-xl">CSS</p>
      </div>

      <p>
        A Social Media Application created using Redux Toolkit! Has User
        Management and Post Management. Uses Purple CSS.
      </p>

      <div className="flex gap-4 text-xs">
        <Button to="https://github.com/ShishirShekhar" value="Github" />
        <Button to="https://github.com/ShishirShekhar" value="Live App" />
      </div>
    </div>
  );
};

export default Project;
