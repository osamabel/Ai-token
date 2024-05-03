import React from 'react'

function Profiting() {
  return (
    <div className='w-full inset-0 flex items-center justify-center py-[100px] bg-black'>
        <div className="w-[1340px] flex flex-col gap-y-[50px]">
            <div className='flex flex-col w-full'>
                <h1 className='title_1 pb-[10px] px-[30px] sm:px-0'>Profiting Through</h1>
                <h2 className='title_2 self-end text-gradient px-[30px] sm:px-0 text-right'>AI Innovation & Decentralization</h2>
            </div>
            <div className='flex gap-x-[30px] flex-col sm:flex-row px-[30px] gap-y-[20px] sm:px-0'>
                <div className=''>
                    <video className="inset-0 w-full h-full object-cover" autoPlay loop muted>
                        <source src="/videos/creon-logo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className='text-white font-satoshi flex flex-col gap-y-[30px] sm:min-w-[34%] sm:max-w-[30%]  items-center justify-center border-x-[1px] border-gray-900 px-[30px]'>
                    <p className='sm:text-[22px] text-[16px] font-[700] min-w-auto'>
                    The dynamic community driven business model of the future.
                    </p>
                    <p className='sm:text-[18px] text-[10px] font-[400]'>
                    At Creon, we blend the power of AI tools with the dynamic crypto and NFT markets, utilizing an innovative business model to drive profitability. This approach empowers our community, as our NFT and token holders directly benefit from the growth and prosperity of the Creon network, creating a win-win scenario for both our community and for the projects we launch.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profiting