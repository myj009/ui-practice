import React, { useState } from "react";
import { InputField } from "../components/InputField";
import svgIcon from "../assets/info-circle (4) 1.svg";
import logo from "../assets/ebex-logo.svg";
import { Link } from "react-router-dom";

const Signin: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const submit = () => {};

  return (
    <div className="flex h-screen justify-center items-center bg-[#131135]">
      <div className="flex gap-4 justify-center items-center">
        <div className="p-8">
          <img src={logo} alt="Company Logo" className="mb-4" />
          <h2 className="text-2xl font-bold mb-6 text-left text-white">
            Welcome
          </h2>
          <InputField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
          />
          <InputField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            placeholder="Password"
            onChange={handleChange}
          />
          <div className="mb-6">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="mr-2 leading-tight"
            />
            <label className="text-sm text-white">Remember me</label>
          </div>
          <button
            onClick={submit}
            className="w-full mb-2 flex justify-center items-center rounded-md bg-purple-500 hover:bg-purple-700"
          >
            <p className="text-white text-sm py-3">Sign In</p>
          </button>
          <div className="flex mb-8 justify-center text-white text-sm">
            Forgot Password
          </div>
          <div className="mb-6 w-full h-[0.5px] bg-[#9695B9]"></div>
          <div className="flex mb-6 justify-start text-c-gray text-sm">
            Don’t have an account?
          </div>
          <button className="w-full mb-6 flex justify-center items-center rounded-md border border-c-gray">
            <Link to="/signup" className="text-white text-sm py-3">
              Registration
            </Link>
          </button>
          <div className="mb-6 w-full h-[0.5px] bg-[#9695B9]"></div>
          <div className="flex mb-4 justify-start text-c-gray text-sm">
            Do you need help? Contact technical support.
          </div>
          <div className="flex justify-start">
            <img src={svgIcon} alt="Support" />
            <span className="text-sm">support@ebex.com</span>
          </div>
        </div>
        <div className="lg:block w-1/2 h-full">
          <img src="/signup-image.png" alt="Side Visual" />
        </div>
      </div>
    </div>
  );
};

export default Signin;
