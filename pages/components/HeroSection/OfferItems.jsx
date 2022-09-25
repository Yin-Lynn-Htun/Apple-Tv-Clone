import React from 'react'

const OfferItems = () => {
    return (
        <div className="text-white">
            <h2 className="text-base">Buy an Apple device</h2>
            <h3 className="text-[28px] font-bold">3&nbsp;months free.</h3>
            <p className="text-base mt-2 mb-6 text-gray-500">
                Apple&nbsp;TV+ is included for 3&nbsp;months when you purchase
                an Apple device and redeem the offer within&nbsp;90&nbsp;days.
                <sup class="footnote footnote-number">
                    <a href="#footnote-2" aria-label="Footnote 1">
                        1
                    </a>
                </sup>
            </p>
            <a className="text-base font-bold px-6 py-3 rounded-3xl bg-white text-black">
                Check eligibility
            </a>
        </div>
    )
}

export default OfferItems
