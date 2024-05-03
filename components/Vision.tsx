import React from "react";
import Feature from "./Feature";

const titles = [
  "Profitability and <br/> Growth",
  "Transparent & Fair Decentralized <br/>Earnings",
  "Launching the <br/>future",
  "Limitless Possibilities of AI <br/>Crypto",
];

function Vision() {
  return (
    <div className="w-full inset-0 flex items-center justify-center py-[100px] bg-blvack bg-black overflow-hidden relative">
      <div className="hidden sm:flex absolute bottom-[50px] sm:left-[22%] z-0 w-[540px] overflow-hidden">
        <img
          className=" w-full h-full object-cover"
          src="/images/CREON_1.png"
          alt=""
        />
      </div>
      <div className="shadow absolute bottom-[50px] left-[22%] z-[10] h-[300px] w-[540px] overflow-hidden">
      </div>
      <div className="w-[1340px] z-[20]">
        <div className="flex justify-between flex-col sm:flex-row gap-y-[40px]">
          <div className="sm:w-[52%] w-full px-[30px] sm:px-0">
            <h1 className="title_2 ">
              Our vision is to support the innovation of AI blockchain projects{" "}
              <span className="text-gradient">
                {" "}
                while prioritizing communities and democratizing profits
              </span>
            </h1>
          </div>
          <div className="sm:w-auto px-[30px] sm:px-0">
            <div className="flex flex-col overflow-hidden max-h-[800px]">
              {titles.map((title, index) => (
                <Feature key={index} title={title} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;
