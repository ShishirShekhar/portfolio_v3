import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import profile from "../img/profile.jpg";

const Dashboard = () => {
  return (
    <div className="flex flex-col pt-10">
      <div className="flex flex-col md:flex-row items-center">
        <img src={profile} alt="profile" className="rounded-xl md:w-1/2 lg:w-1/3" />

        <div className="lg:px-20 md:px-10">
          <h1 className="text-3xl font-bold pt-10">Hello!</h1>
          <p className="pt-2 text-2xl font-thin leading-8 lg:leading-10 tracking-wide lg:tracking-widest">
            I'm <span className="font-bold">Shishir Shekhar</span> a passionate
            learner and aspiring full stack developer based in Bangalore.
          </p>
          <p className="text-2xl font-thin leading-8 lg:leading-10 tracking-wide lg:tracking-widest">
            My world revolves around coding and discovering new programming
            languages. Take a look at my projects and insightful blogs below.
            Stay tuned for updates on my exciting journey!
          </p>
        </div>
      </div>

      <div className="pt-10 flex flex-col gap-10">
        <div className="flex justify-center">
          <Link to="/projects">
            <p className="bg-[#30017E] rounded-xl text-white font-semibold py-2 text-center px-10">
              My Projects
            </p>
          </Link>
        </div>

        <div className="flex justify-around w-full">
          <a
            href="https://github.com/ShishirShekhar"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className="text-4xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/shishir-shekhar/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin className="text-4xl" />
          </a>
          <a
            href="https://www.instagram.com/sol_shishir/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram className="text-4xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
