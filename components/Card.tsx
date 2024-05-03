import React from "react";

interface CardProps {
  item: {
    title1: string;
    title2: string;
    image: string;
    paragraph: string;
    comming: boolean;
  };
}

function Card({ item }: CardProps) {
  return (
    <div className="bg-[#13171D] sm:w-[34%] w-full py-[25px] pr-[25px] flex flex-col gap-y-[30px] relative">
      {item.comming ? (
        <div className="absolute font-satoshi font-[700] text-[12px] leading-[13.2px] bg-white rounded-full py-[8px] px-[16px] top-[-10px] right-0">
          COMMING SOON
        </div>
      ) : (
        ""
      )}
      <div className="pl-[25px] sm:min-h-[170px] min-h-[70px]">
        <h1 className="title_2">{item.title1}</h1>
        <h2 className="text-gradient text-[10px] sm:text-[22px] py-[30px] font-satoshi font-[700] ">
          {item.title2}
        </h2>
      </div>
      <div className="overflow-hidden">
        <img
          className="rounded-r-[10px] hover:scale-[1.2] transition_700"
          src={`/images/${item.image}.png`}
          alt=""
        />
      </div>
      <div className="pl-[25px] text-white font-satoshi font-[400] text-[10px] sm:text-[18px] sm:leading-[23.4px] leading-[13.4px]">
        {item.paragraph}
      </div>
    </div>
  );
}

export default Card;
