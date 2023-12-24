import React, { useState } from "react";
import { Link } from "react-router-dom";
import { InputField } from "../components/InputField";
import logo from "../assets/ebex-logo.svg";

const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    termsAndConditions: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit logic here
    console.log(formData);
  };

  return (
    <div className="flex min-h-screen bg-[#131135] items-center justify-center">
      <div className="flex justify-center items-center">
        <div className="w-full max-w-md">
          <form
            onSubmit={handleSubmit}
            className="shadow-md rounded px-8 pt-6 pb-8 mb-4 text-[#9695B9]"
          >
            <img src={logo} alt="Company Logo" className="mb-4" />
            <h2 className="text-2xl font-bold mb-6 text-left text-white">
              Create account
            </h2>

            {/* Full Name */}
            <InputField
              label="Full Name"
              type="text"
              name="fullName"
              value={formData.fullName}
              placeholder="Full Name"
              onChange={handleChange}
            />
            {/* Email */}
            <InputField
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleChange}
            />
            {/* Phone Number */}
            <InputField
              label="PhoneNumber"
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              placeholder="Phone number"
              onChange={handleChange}
            />
            {/* Password */}
            <InputField
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              placeholder="Create password"
              onChange={handleChange}
            />
            {/* Confirm Password */}
            <InputField
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              placeholder="Confirm password"
              onChange={handleChange}
            />
            {/* ...other input fields... */}
            <div className="mb-6">
              <input
                type="checkbox"
                name="termsAndConditions"
                checked={formData.termsAndConditions}
                onChange={handleChange}
                className="mr-2 leading-tight"
              />
              <label className="text-sm text-blue-500 hover:text-blue-800">
                <span>I agree to the </span>
                <Link to="/terms" className="">
                  Terms of Use
                </Link>
              </label>
            </div>

            <div className="flex items-center justify-around">
              <button
                type="submit"
                className="hover:bg-purple-700 bg-c-purple-light text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Create account
              </button>
              <Link
                to="/signin"
                className="inline-block align-baseline font-bold text-sm text-c-purple-light hover:text-purple-800"
              >
                Sign in
              </Link>
            </div>
          </form>
        </div>
        <div className="lg:block w-1/2 h-full">
          <img src="/signup-image.png" alt="Side Visual" />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
