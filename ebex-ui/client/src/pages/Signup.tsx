import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputField } from "../components/InputField";
import logo from "../assets/ebex-logo.svg";
import banner from "../assets/signup-image.png";
import axios from "axios";

const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    termsAndConditions: false,
  });
  const errRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Submit logic here
    try {
      const res = await axios.post("http://localhost:3001/user/signup", {
        name: formData.fullName,
        email: formData.email,
        password: formData.password,
        phone: formData.phoneNumber,
      });
      if (res.status !== 201) {
        errRef.current!.innerText = res.data.message;
        return;
      }
      console.log(res.data);
      navigate("/signin");
    } catch (e) {
      console.log(e);
    }
    console.log(formData);
  };

  const isSubmitDisabled = () => {
    if (
      formData.fullName === "" ||
      formData.email === "" ||
      formData.phoneNumber === "" ||
      formData.password === "" ||
      formData.confirmPassword === "" ||
      !formData.termsAndConditions
    ) {
      errRef.current!.innerText = "Please fill out all fields";
      return true;
    }
    if (formData.password !== formData.confirmPassword) {
      errRef.current!.innerText = "Passwords do not match";
      return true;
    }
    if (formData.password.length < 8) {
      errRef.current!.innerText = "Password must be at least 8 characters";
      return true;
    }
    if (formData.phoneNumber.length !== 10) {
      errRef.current!.innerText = "Please enter a valid phone number";
      return true;
    }
    if (!formData.email.includes("@")) {
      errRef.current!.innerText = "Please enter a valid email";
      return true;
    }
    errRef.current!.innerText = "";
    return false;
  };

  return (
    <div className="flex min-h-screen bg-[#131135] items-center justify-center">
      <div className="flex justify-center items-center">
        <div className="w-full max-w-md">
          <form
            onSubmit={handleSubmit}
            className="shadow-md rounded px-8 pt-6 pb-8 mb-4 text-[#9695B9]"
          >
            <img
              onClick={() => navigate("/")}
              src={logo}
              alt="Company Logo"
              className="mb-4 cursor-pointer"
            />
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
                disabled={isSubmitDisabled()}
                className="hover:bg-purple-700 bg-c-purple-light text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-c-gray disabled:cursor-not-allowed"
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
            <div
              ref={errRef}
              id="signup-err"
              className="mt-8 text-red-700 flex justify-center"
            ></div>
          </form>
        </div>
        <div className="lg:block h-full">
          <img src={banner} alt="Side Visual" />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
