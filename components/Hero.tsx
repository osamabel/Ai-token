import React from "react";

function Hero() {
  return (
    <div className="h-screen inset-0 overflow-hidden flex items-center justify-center z-[10] bg-black">
      <video className="inset-0 w-full h-full object-cover" autoPlay loop muted>
        <source src="/videos/main-background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        className="absolute w-full h-screen inset-0 hero_gradient opacity-[.4]"
        style={{ filter: "contrast(1) brightness(.3) saturate(5)" }}
      ></div>
      <div className="absolute w-full inset-0 h-[60%] self-end flex items-center justify-center px-[30px] sm:p-0">
        <div className="w-[1340px] flex flex-col gap-y-[40px] items-start">
          <h1 className="title_1 sm:w-[1300px] w-full">
            The world's first platform for Tokenizing AI blockchain projects
          </h1>
          <div className="border-y-[2px] p-[5px] border-gradient">
            <h1 className="text-gradient text-[10px] sm:text-[22px] font-satoshi font-[700]">
              Hold the Creon Pass NFT and earn passive income from AI Tools
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
