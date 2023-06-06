import { GoHome } from "react-icons/go";
import { AiFillHome, AiOutlineProject, AiFillProject } from "react-icons/ai";
import logo from "../img/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Nav = () => {
  const location = useLocation();
  const [home, setHome] = useState(true);

  useEffect(() => {
    setHome(location.pathname === "/");
  }, [location]);

  return (
    <div className="flex justify-between items-center">
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          className="w-10"
          onClick={() => setHome(true)}
        />
      </Link>

      <div className="flex text-4xl gap-10">
        <Link to="/" onClick={() => setHome(true)}>
          {home ? <AiFillHome /> : <GoHome />}
        </Link>
        <Link to="/projects" onClick={() => setHome(false)}>
          {!home ? <AiFillProject /> : <AiOutlineProject />}
        </Link>
      </div>
    </div>
  );
};

export default Nav;
