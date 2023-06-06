import { Link } from "react-router-dom";

const Button = ({ to, value }) => {
  return (
    <Link to={to}>
      <p className="bg-[#30017E] rounded-xl text-white py-2 px-4 text-center">
        {value}
      </p>
    </Link>
  );
};

export default Button;
