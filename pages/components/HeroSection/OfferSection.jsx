import React from 'react'
import OfferItems from './OfferItems'

const OfferSection = () => {
    return (
        <div className="flex flex-col gap-16 px-6 pt-[150px] pb-[170px]">
            <OfferItems />
            <OfferItems />
            <OfferItems />
        </div>
    )
}

export default OfferSection
