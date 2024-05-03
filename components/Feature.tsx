"use client";
import React, { useState } from "react";

interface FeatureProps {
  title: string;
  index: number;
}

function Feature({ title, index }: FeatureProps) {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      onClick={() => {
        setToggle((prev: boolean) => !prev);
      }}
      className={`flex gap-x-[30px] py-[20px] border-b-[1px] border-gray-900 cursor-pointer`}
    >
      <div className="relative w-[100px] h-[100px] flex items-center justify-center">
        <svg
          className="absolute z-[20] max-w-[70%]"
          viewBox="0 0 68 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 22.5204C0 20.3467 1.1756 18.343 3.07307 17.2827L31.0731 1.63563C32.892 0.619181 35.108 0.619184 36.9269 1.63564L64.9269 17.2827C66.8244 18.343 68 20.3467 68 22.5204V53.4796C68 55.6533 66.8244 57.657 64.9269 58.7173L36.9269 74.3644C35.108 75.3808 32.892 75.3808 31.0731 74.3644L3.07307 58.7173C1.1756 57.657 0 55.6533 0 53.4796V22.5204Z"
            fill={toggle ? "white" : "#13171D"}
          />
        </svg>
        <svg
          className="absolute z-[30] max-w-[60%]"
          viewBox="0 0 56 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 19.0366C0 16.8543 1.18486 14.8441 3.0941 13.7872L25.0941 1.60862C26.9021 0.607766 29.0979 0.607766 30.9059 1.60862L52.9059 13.7872C54.8151 14.8441 56 16.8543 56 19.0366V42.9634C56 45.1457 54.8151 47.1559 52.9059 48.2128L30.9059 60.3914C29.0979 61.3922 26.9021 61.3922 25.0941 60.3914L3.0941 48.2128C1.18486 47.1559 0 45.1457 0 42.9634V19.0366Z"
            fill="#2a2e34"
          />
        </svg>
        <img
          className="absolute z-[40] w-[15px]"
          src={`/images/${index + 1}.png`}
          alt=""
        />
        <img className="absolute" src="/images/dotted.png" alt="" />
      </div>
      <div className="sm:w-[450px] w-full">
        <div className="text-white flex items-center justify-between py-[25px] group">
          <div className="text-white sm:text-[22px] text-[16px] font-satoshi font-[700] leading-[18.6px] sm:leading-[28.6px] group-hover:text-blue-500">
            <div dangerouslySetInnerHTML={{ __html: title }}></div>
          </div>
          <div className="px-[20px]">
            <img className="absolute" src="/images/arrow.png" alt="" />
          </div>
        </div>
        <div
          className={`text-[12px] sm:text-[18px] font-satoshi font-[400] text-[white] leading-[17.4px] sm:leading-[23.4px] overflow-hidden transition_700 
            ${toggle ? "open" : "closed"}`}
        >
          At Creon, we handpick cutting-edge AI projects and offer our community
          and token holders early access and investment opportunities. Our
          community actively contributes to the growth and profitability of
          these projects, creating a dynamic ecosystem of innovation and shared
          success.
        </div>
      </div>
    </div>
  );
}

export default Feature;
