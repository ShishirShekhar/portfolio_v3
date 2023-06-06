import Footer from "../components/Footer";
import ProjectLists from "../components/Project/ProjectLists";
import Nav from "../components/Nav";

const Project = () => {
  return (
    <div className="p-6 flex flex-col gap-10">
      <Nav />
      <ProjectLists />
      <Footer />
    </div>
  );
};

export default Project;
