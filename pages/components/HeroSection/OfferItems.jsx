import React from 'react'

const OfferItems = ({ heading, title, subtitle, buttonText }) => {
    return (
        <div className="text-white">
            <h2 className="text-base font-semibold">{heading}</h2>
            <h3 className="text-[28px] font-bold mt-3">{title}</h3>
            <p className="text-base mt-1 mb-6 text-gray-text">{subtitle}</p>
            <a className="text-base font-bold px-6 py-3 rounded-3xl bg-white text-black">
                {buttonText}
            </a>
        </div>
    )
}

export default OfferItems
