/* eslint-disable @next/next/no-img-element */
import React from 'react'

const AppleAirPlaySection = () => {
    return (
        <section className="bg-gray-100 mt-4">
            <div className="pt-11 flex flex-col justify-center items-center gap-2">
                <h3 className="font-semibold text-lg">AirPlay</h3>
                <p className="typography-headline">
                    Bring Apple&nbsp;TV+ to <br />a screen near you.
                </p>

                <a href="#" className="text-link">
                    Learn more {'>'}
                </a>
                <img
                    className="w-full"
                    src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/air_play__dyuvvwnd5riq_small_2x.jpg"
                    alt="apple tv"
                />
            </div>
        </section>
    )
}

export default AppleAirPlaySection
