"use client";
import React, { useState } from "react";

function Navigation() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="text-[18px] font-[700] font-satoshi text-white absolute w-full bg-blgack z-[10] ">
        <div className="flex items-center justify-between py-[30px] sm:px-[40px] px-[20px]">
          <img src="/images/Logo.png" alt="" />
          <div className="sm:flex items-center gap-x-[60px] hidden">
            <div className="flex items-center gap-x-[40px]">
              <a href="">Creon Pass</a>
              <a href="">Token</a>
              <a href="">AI Revenue</a>
              <a href="">AI Launchpad</a>
            </div>
            <div className="border-[2px] border-white rounded-[6px] py-[6px] px-[24px] cursor-pointer">
              Connect
            </div>
          </div>

          <button
            onClick={() => {
              setMenu((prev: boolean) => !prev);
            }}
            className={`sm:hidden z-[30] ${
              menu && "bg-blue-500"
            }  p-[7px] rounded-[6px]`}
          >
            <img src={menu ? "/images/close.png" : "/images/menu.png"} alt="" />
          </button>
        </div>
        {menu && (
          <div className="sm:hidden h-screen w-full absolute top-0 right-0 z-[20] bg-black/60 backdrop-blur-[2px] flex justify-end">
            <div className="h-screen w-[58%] bg-black flex flex-col items-start gap-y-[20px] py-[30px] px-[30px] ">
              <div className="border-[2px] border-white rounded-[6px] py-[7px] px-[20px] cursor-pointer">
                Connect
              </div>
              <div className="flex flex-col w-full">
                <a className="py-[15px] border-y-[1px] border-gray-900" href="">
                  Creon Pass
                </a>
                <a className="py-[15px] border-b-[1px] border-gray-900" href="">
                  Token
                </a>
                <a className="py-[15px] border-b-[1px] border-gray-900" href="">
                  AI Revenue
                </a>
                <a className="py-[15px] border-b-[1px] border-gray-900" href="">
                  AI Launchpad
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navigation;
