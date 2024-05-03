import React from 'react'
import Card from './Card'

const content = [
    {
        title1: "token",
        title2: "The Gateway token to the world of AI",
        image: "token",
        paragraph: "Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.",
        comming: true
    },
    {
        title1: "revenue",
        title2: "Driving income and growth through decentralization",
        image: "revenue",
        paragraph: "CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support.",
        comming: true
    },
    {
        title1: "launchpad",
        title2: "Driving the future of AI Innovation",
        image: "launchpad",
        paragraph: "The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.",
        comming: true
    },
]

function Launchpad() {
  return (
    <div className="w-full inset-0 flex items-center justify-center py-[100px] bg-black relative">
        <div className="w-[1340px] flex flex-col sm:flex-row gap-[25px] px-[30px] sm:px-0">
            {
                content.map((item, index)=>(
                    <Card item={item} key={index}/>
                ))
            }
        </div>
    </div>
  )
}

export default Launchpad