import React from "react";

function CreonPass() {
  return (
    <div className="w-full inset-0 flex items-center justify-center sm:py-[100px] bg-black">
      <div className="w-[1340px] flex flex-col sm:flex-row gap-y-[100px]">
        <div className="flex-1 flex flex-col items-center justify-between gap-y-[40px]">
          <div className="px-[30px] sm:px-[0px]">
            <h1 className="title_1 pb-[10px] ">creon pass nft</h1>
            <h2 className="text-gradient text-[8px] sm:text-[22px] py-[30px] font-satoshi font-[700] border-t-[1px] border-gray-900">
              The Creon NFT pass unlocks access to AI projects, the Creon
              launchpad, and a ticket to generate passive income through
              AI-driven tools
            </h2>
            <div className="text-white sm:text-[18px] text-[10px]  font-satoshi font-[400] flex flex-col items-start gap-y-[12px]">
              <p className="border-gray-900 border-[1px] py-[12px] px-[20px] rounded-[6px]">
                Pre-launch investment opportunities for upcoming AI projects
              </p>
              <p className="border-gray-900 border-[1px] py-[12px] px-[20px] rounded-[6px]">
                Free and early access to Creon built AI projects
              </p>
              <p className="border-gray-900 border-[1px] py-[12px] px-[20px] rounded-[6px]">
                Higher allocation limits on the Creon AI Launchpad
              </p>
              <p className="border-gray-900 border-[1px] py-[12px] px-[20px] rounded-[6px]">
                Revenue share distribution from Creon built AI projects
              </p>
            </div>
          </div>
          <button className="__gradient py-[10px] sm:px-[170px] px-[90px] self-center sm:self-start rounded-[6px] font-satoshi font-[700] text-[18px] text-white">
            Buy Creon Pass
          </button>
        </div>
        <div className="flex-1 relative flex items-center justify-center">
          <video
            className="inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
          >
            <source src="/videos/nft-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="shadow-up bg-redx-600 absolute top-0 left-0 z-[10] w-full h-full overflow-hidden p-[40px]">
          </div>
          <div className="shadow-down bg-redx-600 absolute top-0 left-0 z-[10] w-full h-full overflow-hidden p-[40px]">
          </div>
          <div className="shadow-up bg-redx-600 absolute top-0 left-0 z-[10] w-full h-full overflow-hidden p-[40px]">
          </div>
          <div className="shadow-down bg-redx-600 absolute top-0 left-0 z-[10] w-full h-full overflow-hidden p-[40px]">
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreonPass;
