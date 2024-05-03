import React from 'react'


interface MarcketProps {
    item: {
      title1: string;
      image: string;
      paragraph: string;
    };
  }

function MarketCard({ item }: MarcketProps) {
  return (
    <div className="bg-[#13171D]/60 w-full sm:h-[270px] flex flex-col sm:flex-row pb-[30px] sm:pb-0">
        <div className='p-[30px] flex flex-col gap-y-[10px]'>
            <h1 className="title_2">{item.title1}</h1>
            <p className=" text-white font-satoshi font-[400] text-[10px] leading-[13.4px] sm:text-[18px] sm:leading-[23.4px]">
            {item.paragraph}
            </p>
        </div>
        <div className='h-full sm:min-w-[340px] w-full px-[30px] sm:px-0'>
            <img className='h-full object-cover' src={`/images/${item.image}.png`} alt="" />
        </div>
    </div>
  )
}

export default MarketCard