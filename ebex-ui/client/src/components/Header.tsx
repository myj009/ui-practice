import React from "react";
import iconText from "../assets/ebex-logo.svg";
import iconLogo from "../assets/ebex-group.svg";
import { Link, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex z-10 justify-between items-center py-3 px-4 text-c-white w-full">
      <div className="flex gap-2">
        <img src={iconLogo} alt="logo" />
        <img src={iconText} alt="text" />
      </div>
      <div className="text-sm">
        <ul className="flex justify-between gap-8">
          <li>
            <Link to="#">Features</Link>
          </li>
          <li>
            <Link to="#">Examples</Link>
          </li>
          <li>
            <Link to="#">Pricing</Link>
          </li>
          <li>
            <Link to="#">How it works</Link>
          </li>
        </ul>
      </div>
      <div className="flex justify-between gap-3 text-sm">
        <div className="w-px my-3 mx-2 bg-c-gray"></div>
        <button
          onClick={() => navigate("/signin")}
          className="px-6 py-3 bg-c-purple-light rounded-md"
        >
          Log In
        </button>
        <button
          onClick={() => navigate("/signup")}
          className="px-6 py-3 bg-transparent border border-c-purple-light rounded-md"
        >
          Registration
        </button>
      </div>
    </div>
  );
};

export default Header;
