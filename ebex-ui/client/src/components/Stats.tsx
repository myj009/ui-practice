import React from "react";
import barIcon from "../assets/barIcon.svg";

const Stats: React.FC = () => {
  return (
    <div className="flex mt-12 mb-24 w-full flex-col items-center align-center text-c-purple text-2xl">
      <div className="">Join our community and take your</div>
      <div className="mb-20">
        <span className="font-[900]">Business Cards</span> to the next level
      </div>
      <div className="flex w-full justify-around">
        <div className="flex flex-col gap-3 items-center">
          <img src={barIcon} alt="" />
          <div className="text-3xl font-bold">184,878</div>
          <div className="text-sm text-c-gray">Customers</div>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <img src={barIcon} alt="" />
          <div className="text-3xl font-bold">184,878</div>
          <div className="text-sm text-c-gray">Customers</div>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <img src={barIcon} alt="" />
          <div className="text-3xl font-bold">184,878</div>
          <div className="text-sm text-c-gray">Customers</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
