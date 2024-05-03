"use client";
import React, { useState } from "react";
import Card from "./Card";
import MarketCard from "./MarketCard";

const content = [
  {
    title1: "AI Prospects, Market Size, and Development Pace",
    image: "apmsadp",
    paragraph:
      "The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.",
  },
  {
    title1: "AI Tools and Market",
    image: "atam",
    paragraph:
      "AI tools refer to the technologies and software that enable computer systems to perform tasks usually requiring human intellect. The market for these tools is dynamic and diverse, encompassing areas such as Natural Language Processing (NLP), machine learning, computer vision, and robotics. With a wide range of applications, AI tools are becoming increasingly indispensable in many sectors, from healthcare to finance, retail, manufacturing, and many others.",
  },
  {
    title1: "AI, Crypto, and NFT Market",
    image: "acanm",
    paragraph:
      "Artificial Intelligence and blockchain technology are two groundbreaking areas leading new technological innovations. The combination of these two technologies creates intriguing possibilities. For instance, Non-Fungible Tokens (NFTs) can leverage AI to create unique digital artworks or to provide exclusive AI-based services. Meanwhile, cryptocurrencies can benefit from AI by improving security mechanisms, transaction efficiency, and service personalization. Such combination brings substantial benefits for both developers and users, paving the way for unprecedented possibilities.",
  },
];

function Market() {
  const [ishover, setIshover] = useState("");
  return (
    <div className="w-full inset-0 flex items-center justify-center pt-[100px] bg-black relative">
      <video
        className="absolute opacity-30 inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/videos/roadmap-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        className="absolute w-full inset-0 bg-gradient-to-b from-black from80% opacity-[1]"
        style={{ filter: " brightness(.9)" }}
      ></div>
      <div className="w-[1340px] flex flex-col gap-y-[40px] z-[30]">
        <div className="flex flex-col gap-y-[30px] px-[30px] sm:px-0">
          {content.map((item, index) => (
            <MarketCard item={item} key={index} />
          ))}
        </div>
        <div className="text-white py-[20px] px-[30px] sm:px-0 flex items-center justify-between">
          <div className="flex items-center sm:gap-x-[100px] gap-x-[20px]">
            <p className="text-[9px] sm:text-[16px] font-satoshi font-[400]">
              © Creon 2023. All rights reserved.
            </p>
            <div className="flex items-center sm:gap-x-[10px] gap-x-[3px]">
              <a
                onMouseLeave={() => setIshover("")}
                onMouseEnter={() => setIshover("t")}
                href=""
                className="w-[20px]"
              >
                <svg
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="17"
                    cy="17"
                    r="16"
                    stroke={ishover == "t" ? "#2196F3" : "white"}
                    stroke-width="2"
                  />
                  <path
                    d="M22.1396 10.9193L10.3269 15.9966C9.85152 16.233 9.69074 16.7065 10.212 16.9635L13.2425 18.0369L20.5697 12.9895C20.9698 12.6727 21.3794 12.7572 21.027 13.1057L14.7338 19.4567L14.5361 22.1445C14.7192 22.5595 15.0545 22.5614 15.2683 22.3551L17.0094 20.5189L19.9913 23.0077C20.6839 23.4647 21.0608 23.1698 21.2098 22.3321L23.1656 12.0096C23.3687 10.9785 23.0224 10.5242 22.1396 10.9193Z"
                    fill={ishover == "t" ? "#2196F3" : "white"}
                  />
                </svg>
              </a>
              <a
                onMouseLeave={() => setIshover("")}
                onMouseEnter={() => setIshover("d")}
                href=""
                className="w-[20px]"
              >
                <svg
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_573_302)">
                    <circle
                      cx="17"
                      cy="17"
                      r="16"
                      stroke={ishover == "d" ? "#2196F3" : "white"}
                      stroke-width="2"
                    />
                    <path
                      d="M22.2269 11.9071C21.2394 11.4221 20.1946 11.0774 19.1202 10.8823C18.9864 11.1363 18.83 11.4778 18.7222 11.7495C17.5639 11.5667 16.4162 11.5667 15.2791 11.7495C15.1713 11.4779 15.0115 11.1363 14.8764 10.8823C13.801 11.0775 12.7553 11.423 11.7673 11.9096C9.80117 15.0281 9.26817 18.0691 9.53464 21.067C10.8387 22.0891 12.1025 22.7101 13.3449 23.1164C13.6537 22.6707 13.9267 22.1988 14.161 21.7056C13.7149 21.5274 13.2848 21.3077 12.8759 21.0492C12.9835 20.9655 13.0886 20.8783 13.191 20.7876C15.6688 22.004 18.361 22.004 20.8092 20.7876C20.9121 20.8777 21.0171 20.9649 21.1242 21.0492C20.7147 21.3084 20.2838 21.5285 19.8368 21.7069C20.0725 22.2021 20.3449 22.6744 20.6529 23.1176C21.8965 22.7114 23.1615 22.0904 24.4655 21.067C24.7782 17.5917 23.9314 14.5786 22.2269 11.907V11.9071ZM14.4986 19.2233C13.7548 19.2233 13.1448 18.4945 13.1448 17.6069C13.1448 16.7194 13.7418 15.9893 14.4986 15.9893C15.2555 15.9893 15.8654 16.7181 15.8524 17.6069C15.8536 18.4945 15.2555 19.2233 14.4986 19.2233ZM19.5016 19.2233C18.7578 19.2233 18.1478 18.4945 18.1478 17.6069C18.1478 16.7194 18.7448 15.9893 19.5016 15.9893C20.2585 15.9893 20.8684 16.7181 20.8554 17.6069C20.8554 18.4945 20.2585 19.2233 19.5016 19.2233Z"
                      fill={ishover == "d" ? "#2196F3" : "white"}
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_573_302">
                      <rect
                        width="34"
                        height="34"
                        fill={ishover == "d" ? "#2196F3" : "white"}
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a
                onMouseLeave={() => setIshover("")}
                onMouseEnter={() => setIshover("tw")}
                href=""
                className="w-[20px]"

              >
                <svg
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_573_303)">
                    <circle
                      cx="17"
                      cy="17"
                      r="16"
                      stroke={ishover == "tw" ? "#2196F3" : "white"}
                      stroke-width="2"
                    />
                    <path
                      d="M24.3337 12.4234C23.7943 12.664 23.2149 12.8265 22.6058 12.8999C23.2343 12.5215 23.7045 11.9257 23.9287 11.224C23.3382 11.577 22.6919 11.8254 22.018 11.9586C21.5648 11.4716 20.9645 11.1488 20.3103 11.0403C19.6562 10.9318 18.9847 11.0438 18.4002 11.3587C17.8157 11.6737 17.3509 12.174 17.0779 12.7821C16.8049 13.3902 16.7391 14.0719 16.8905 14.7215C15.694 14.6611 14.5236 14.3481 13.455 13.8029C12.3865 13.2577 11.4439 12.4924 10.6882 11.5568C10.4298 12.0054 10.2813 12.5255 10.2813 13.0794C10.281 13.578 10.403 14.069 10.6365 14.5088C10.8699 14.9486 11.2077 15.3236 11.6197 15.6005C11.1418 15.5852 10.6746 15.4552 10.2567 15.2215V15.2605C10.2567 15.9598 10.497 16.6377 10.937 17.1789C11.377 17.7202 11.9895 18.0916 12.6706 18.2302C12.2273 18.3509 11.7626 18.3687 11.3116 18.2822C11.5037 18.8839 11.878 19.4101 12.3821 19.7871C12.8862 20.1641 13.4948 20.373 14.1227 20.3846C13.0568 21.2268 11.7404 21.6836 10.3853 21.6816C10.1452 21.6816 9.90539 21.6675 9.66699 21.6393C11.0425 22.5294 12.6437 23.0018 14.279 23C19.8147 23 22.8409 18.3855 22.8409 14.3835C22.8409 14.2535 22.8377 14.1221 22.8319 13.9921C23.4205 13.5637 23.9286 13.0332 24.3324 12.4254L24.3337 12.4234Z"
                      fill={ishover == "tw" ? "#2196F3" : "white"}
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_573_303">
                      <rect width="34" height="34" fill={ishover == "tw" ? "#2196F3" : "white"} />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
          <div className="text-[9px] sm:text-[16px] font-satoshi font-[400] group">
            Powered by{" "}
            <span className="font-monument-extended group-hover:text-blue-500">
              NITABLES
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Market;
