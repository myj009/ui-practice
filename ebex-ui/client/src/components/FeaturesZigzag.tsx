import React from "react";
import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";

const FeaturesZigzag: React.FC = () => {
  return (
    <div className="py-8 px-24 grid grid-cols-2 grid-rows-3 gap-4">
      <img className="mb-12" src={feature1} alt="" />
      <div className="flex flex-col items-start justify-center px-12">
        <div className="rounded-md bg-c-purple-light  flex justify-center items-center mb-4">
          <div className="px-2 py-1 text-white text-xs">Step 1</div>
        </div>
        <div className="text-3xl font-900 mb-4">
          One business card, endless possibilities
        </div>
        <div className="">
          Express yourself in ways never before possible with a business card.
          You can showcase your work by uploading rich content such as photos,
          videos and custom links.
        </div>
      </div>
      <div className="flex flex-col items-start justify-center px-12">
        <div className="rounded-md bg-c-purple-light  flex justify-center items-center mb-4">
          <div className="px-2 py-1 text-white text-xs">Step 1</div>
        </div>
        <div className="text-3xl font-900 mb-4">
          One business card, endless possibilities
        </div>
        <div className="">
          Express yourself in ways never before possible with a business card.
          You can showcase your work by uploading rich content such as photos,
          videos and custom links.
        </div>
      </div>
      <img className="mb-12" src={feature2} alt="" />
      <img className="mb-12" src={feature3} alt="" />
      <div className="flex flex-col items-start justify-center px-12">
        <div className="rounded-md bg-c-purple-light  flex justify-center items-center mb-4">
          <div className="px-2 py-1 text-white text-xs">Step 1</div>
        </div>
        <div className="text-3xl font-900 mb-4">
          One business card, endless possibilities
        </div>
        <div className="">
          Express yourself in ways never before possible with a business card.
          You can showcase your work by uploading rich content such as photos,
          videos and custom links.
        </div>
      </div>
    </div>
  );
};

export default FeaturesZigzag;
