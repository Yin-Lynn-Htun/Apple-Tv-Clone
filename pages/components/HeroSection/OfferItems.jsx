import { useInView } from 'framer-motion'
import React, { useRef } from 'react'

const OfferItems = ({ heading, title, subtitle, buttonText }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { margin: '0px 0px -100px 0px' })

    return (
        <div
            ref={ref}
            style={{
                transform: isInView ? 'translateY(0px)' : 'translateY(100px)',
                opacity: isInView ? 1 : 0,
                transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
            }}
            className="text-white"
        >
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
