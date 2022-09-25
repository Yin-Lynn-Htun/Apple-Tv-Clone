/* eslint-disable @next/next/no-img-element */
import React from 'react'

const AppleTvSection = () => {
    return (
        <section className="bg-gray-100 mt-4">
            <div className="py-11 flex flex-col justify-center items-center gap-4">
                <img
                    className="h-[21px]"
                    src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/apple_tv_4k_logo__bx1mtrage32a_small_2x.png"
                    alt="logo"
                />
                <p class="typography-headline">
                    A higher <br class="small" />
                    definition of TV.
                </p>
                <div className="flex gap-5 items-center">
                    <button className="  bg-link text-white font-bold px-5 py-3 rounded-3xl  ">
                        Buy
                    </button>
                    <a href="#" className="text-link">
                        Learn more {'>'}
                    </a>
                </div>
                <img
                    className="w-[300px]"
                    src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/apple_tv_4k_remote__igmcbznr1w2u_small_2x.jpg"
                    alt="apple tv"
                />
            </div>
        </section>
    )
}

export default AppleTvSection
