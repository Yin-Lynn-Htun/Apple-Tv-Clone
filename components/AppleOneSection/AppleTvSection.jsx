/* eslint-disable @next/next/no-img-element */
import React from 'react'

const AppleTvSection = () => {
    return (
        <section className="bg-gray-100 mt-4 md:mx-12 lg:mx-0">
            <div className="py-11 lg:py-8 flex flex-col md:flex-row-reverse justify-center items-center gap-4">
                <div className="flex flex-col justify-center items-center gap-4 md:gap-2 md:basis-1/2">
                    <img
                        className="h-[21px] xl:h-[35px]"
                        src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/apple_tv_4k_logo__bx1mtrage32a_small_2x.png"
                        alt="logo"
                    />
                    <p className="typography-headline">
                        A higher <br className="small" />
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
                </div>
                <div className="md:basis-1/2 md:grid md:place-items-center xl:pt-7">
                    <img
                        className="w-[300px] xl:w-[540px]"
                        src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/apple_tv_4k_remote__igmcbznr1w2u_small_2x.jpg"
                        alt="apple tv"
                    />
                </div>
            </div>
        </section>
    )
}

export default AppleTvSection
