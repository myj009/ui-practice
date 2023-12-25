import React from "react";
import puzzleIcon from "../assets/puzzle.svg";
import dashboard from "../assets/dashboard.png";

const HeroHome: React.FC = () => {
  return (
    <>
      <div className="z-10 pt-48 text-white px-36 flex flex-col justify-end items-start mb-24">
        <div className="text-4xl mb-1 font-black">Inspire your clients.</div>
        <div className="text-4xl mb-3 font-black">Digitally.</div>
        <div className="">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
          recusandae.
        </div>
        <div className="mb-3">Lorem ipsum dolor sit.</div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <div className="flex items-center">
            <div className="flex justify-center items-center bg-c-purple-light rounded-full">
              <img className="p-2" src={puzzleIcon} alt="" />
            </div>
            <div className="ml-2">Lorem ipsum dolor sit amet.</div>
          </div>
          <div className="flex items-center">
            <div className="flex justify-center items-center bg-c-purple-light rounded-full">
              <img className="p-2" src={puzzleIcon} alt="" />
            </div>
            <div className="ml-2">Lorem ipsum dolor sit amet hdfhsh.</div>
          </div>
          <div className="flex items-center">
            <div className="flex justify-center items-center bg-c-purple-light rounded-full">
              <img className="p-2" src={puzzleIcon} alt="" />
            </div>
            <div className="ml-2">Lorem ipsum dolor sit amet dfhshf dhfj.</div>
          </div>
          <div className="flex items-center">
            <div className="flex justify-center items-center bg-c-purple-light rounded-full">
              <img className="p-2" src={puzzleIcon} alt="" />
            </div>
            <div className="ml-2">Lorem ipsum dolor sit amet.</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center rounded-2xl z-10">
        <img className="m-2 rounded-2xl opacity-1" src={dashboard} alt="" />
      </div>
    </>
  );
};

export default HeroHome;
