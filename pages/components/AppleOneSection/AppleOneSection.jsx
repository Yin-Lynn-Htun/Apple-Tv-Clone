/* eslint-disable @next/next/no-img-element */
import React from 'react'

const AppleOneSection = () => {
    return (
        <section className="bg-gray-100">
            <div className="py-11 flex flex-col justify-center items-center gap-4">
                <img
                    className="h-[21px]"
                    src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/apple_one__b0modw3b87xy_small_2x.png"
                    alt="logo"
                />
                <p class="text-[28px] font-semibold leading-[30px] text-center py-3 ">
                    <span class="lg-wrap">Bundle Apple&nbsp;TV+</span>{' '}
                    <br class="small" />
                    with
                    {/* <br class="large" /> */}
                    {/* <br class="medium" />  */} up to five other
                    great&nbsp;services.
                    <br />
                    And enjoy more for less.
                </p>
                <button className="mx-auto my-5 bg-black text-white font-bold px-5 py-3 rounded-3xl  ">
                    Try Apple One free*
                </button>
                <p className="text-link">Learn more {'>'}</p>
                <img
                    className="w-[300px] translate-x-[20px]"
                    src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/bundle__e93qdcv7mtm6_small_2x.jpg"
                    alt="apple tv plus"
                />
            </div>
        </section>
    )
}

export default AppleOneSection
