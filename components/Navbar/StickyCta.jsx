import React from 'react'

const StickyCta = () => {
    return (
        <div className="bg-[#1C1D1E] z-50 text-white px-4 sticky top-0">
            <div className="xl:max-w-[980px] mx-auto  flex justify-between h-12 items-center lg:px-[22px] ">
                <h3 className="font-semibold text-lg">Apple TV+</h3>
                <button className="rounded-full bg-[#e5e5e5]  text-xs px-3 py-1 text-black">
                    Stream Now
                </button>
            </div>
        </div>
    )
}

export default StickyCta
