import React from 'react'

const StickyCta = () => {
    return (
        <div className="bg-[#1C1D1E] text-white px-4 sticky top-0 flex justify-between h-12 items-center">
            <h3 className="font-semibold text-lg">Apple TV+</h3>
            <button className="rounded-full bg-[#e5e5e5]  text-xs px-3 py-1 text-black">
                Stream Now
            </button>
        </div>
    )
}

export default StickyCta