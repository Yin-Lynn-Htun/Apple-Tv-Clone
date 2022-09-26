/* eslint-disable @next/next/no-img-element */
import React from 'react'

const AppleOneSection = () => {
    return (
        <section className="bg-gray-100 md:mx-12 lg:mx-0">
            <div className="py-11 flex flex-col md:flex-row-reverse justify-center items-center gap-4">
                <div className="flex flex-col  justify-center items-center gap-4 md:gap-2 md:basis-1/2">
                    <img
                        className="h-[21px] xl:h-[33px]"
                        src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/apple_one__b0modw3b87xy_small_2x.png"
                        alt="logo"
                    />
                    <p className="text-[28px] md:text-[24px] xl:text-[40px] 2xl:text-[48px] md:min-w-[345px] font-semibold leading-[30px]  xl:leading-[43px] 2xl:leading-[50px] text-center py-3 ">
                        <span className="lg-wrap">Bundle Apple&nbsp;TV+</span>{' '}
                        <br className="small" />
                        with
                        {/* <br className="large" /> */}
                        {/* <br className="medium" />  */} up to five other
                        great&nbsp;services.
                        <br />
                        And enjoy more for less.
                    </p>
                    <button className="mx-auto my-5 md:my-3 bg-black text-white font-bold px-5 py-3 rounded-3xl  ">
                        Try Apple One free*
                    </button>
                    <p className="text-link">Learn more {'>'}</p>
                </div>
                <div className="md:basis-1/2 md:grid md:place-items-center xl:my-[80px]">
                    <img
                        className="w-[300px] translate-x-[20px] xl:w-[540px]"
                        src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/bundle__e93qdcv7mtm6_small_2x.jpg"
                        alt="apple tv plus"
                    />
                </div>
            </div>
        </section>
    )
}

export default AppleOneSection
