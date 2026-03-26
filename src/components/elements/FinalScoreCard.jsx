import React from 'react'

function FinalScoreCard() {
  return (
    <div className="max-w-92 rounded-b-4xl md:rounded-4xl bg-linear-to-b from-[#7755FF] to-[#2F2CE9]">
        <div className="py-11.25 px-13.5">
            <div className="flex flex-col items-center gap-8 text-center text-primary-navy-200">
                <h2 className='font-bold text-2xl'>Your Result</h2>
                <div className="size-50 rounded-full inline-flex items-center justify-center bg-linear-to-b from-[#4D21C9] to-transparent">
                    <p>
                        <span className='font-extrabold text-7xl block text-primary-white'>76</span> 
                        <span className='font-bold text-lg block text-primary-navy-200'>of 100</span>
                    </p>
                </div>
                <div className="">
                    <h3 className='font-bold text-[2rem] text-primary-white'>Great</h3>
                    <p className='font-medium text-lg mt-4'>You scored higher than 65% of the people who have taken these tests.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FinalScoreCard