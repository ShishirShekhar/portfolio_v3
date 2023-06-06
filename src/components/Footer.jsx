import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex gap-10 justify-around md:w-1/2">
        <Link to="/">
          <p className="bg-[#30017E] rounded-xl text-white font-semibold py-2 text-center w-32">
            Home
          </p>
        </Link>

        <Link to="/projects">
          <p className="bg-[#30017E] rounded-xl text-white font-semibold py-2 text-center w-32">
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
  );
};

export default Footer;
