/* eslint-disable @next/next/no-img-element */
import React from 'react'

const AppleAirPlaySection = () => {
    return (
        <section className="bg-gray-100 mt-4 md:basis-1/2 md:mx-12 lg:mx-0">
            <div className="pt-11 flex flex-col  md:flex-row justify-center items-center gap-2">
                <div className="flex flex-col justify-center items-center gap-2 md:basis-1/2">
                    <h3 className="font-semibold text-lg">AirPlay</h3>
                    <p className="typography-headline">
                        Bring Apple&nbsp;TV+ to <br />a screen near you.
                    </p>

                    <a href="#" className="text-link">
                        Learn more {'>'}
                    </a>
                </div>
                <div className="md:basis-1/2 md:grid md:place-items-center">
                    <img
                        className="w-full"
                        src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/air_play__dyuvvwnd5riq_small_2x.jpg"
                        alt="apple tv"
                    />
                </div>
            </div>
        </section>
    )
}

export default AppleAirPlaySection
