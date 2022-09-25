/* eslint-disable @next/next/no-img-element */
import React from 'react'

const ProductItem = () => {
    return (
        <div className="flex flex-col items-center justify-center basis-1/3 mb-8">
            <img
                className="h-12"
                src="/static/images/appleTv.jpg"
                alt="apple tv"
            />
            <p className="text-xs mt-2">Apple TV</p>
        </div>
    )
}

const AppleTvAppSection = () => {
    return (
        <section className="bg-white text-black px-6">
            <div className="text-center pt-28 px-7">
                <h1 className="text-3xl font-bold">
                    Watch Apple TV+ anywhere on the Apple TV app.
                </h1>
                <p className="text-lg py-4">
                    Find the Apple TV app on your favorite Apple devices. Or
                    watch Apple TV+ online at{' '}
                    <a className="text-blue-400" href="#">
                        tv.apple.com
                    </a>
                </p>
            </div>
            <div className="flex flex-wrap justify-start mb-10">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>

            <section className="flex flex-col justify-center items-center gap-2">
                <h1 className="text-center font-semibold text-[28px]">
                    See it on your smart TV or streaming device
                </h1>
                <a className="text-blue-400" href="#">
                    Set up your device {'>'}
                </a>
                <a className="text-blue-400" href="#">
                    Explore compatilbe devices {'>'}
                </a>
                <div className="flex justify-center items-center flex-wrap my-8">
                    <img
                        className="h-[51px] mb-9 px-[10px]"
                        src="static/images/smartTV.jpg"
                        alt="Smart tv"
                    />
                    <img
                        className="h-[51px] mb-9 px-[10px]"
                        src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/icon_lg__7fxn3l0zf5ua_small_2x.jpg"
                        alt="Smart tv"
                    />
                    <img
                        className="h-[51px] mb-9 px-[10px]"
                        src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/icon_vizio__crgnno5ezt2e_small_2x.jpg"
                        alt="Smart tv"
                    />
                    <img
                        className="h-[51px] mb-9 px-[10px]"
                        src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/icon_sony__dv28xq4n91ea_small_2x.jpg"
                        alt="Smart tv"
                    />
                    <img
                        className="h-[51px] mb-9 px-[10px]"
                        src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/icon_xfinity__fohor3dbqrmi_small_2x.jpg"
                        alt="Smart tv"
                    />
                    <img
                        className="h-[51px] mb-9 px-[10px]"
                        src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/icon_roku__d3kr4gpcimoi_small.jpg"
                        alt="Smart tv"
                    />
                    <img
                        className="h-[51px] mb-9 px-[10px]"
                        src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/icon_firetv__f6qpefrj0ree_small_2x.jpg"
                        alt="Smart tv"
                    />
                    <img
                        className="h-[51px] mb-9 px-[10px]"
                        src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/icon_google_tv__e5t4asdc2gsy_small_2x.jpg"
                        alt="Smart tv"
                    />
                    <img
                        className="h-[51px] mb-9 px-[10px]"
                        src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/icon_playstation__djtq2b40wf2a_small_2x.jpg"
                        alt="Smart tv"
                    />
                    <img
                        className="h-[51px] mb-9 px-[10px]"
                        src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/icon_xbox__cfelmbxxfoaa_small_2x.jpg"
                        alt="Smart tv"
                    />
                </div>
            </section>
        </section>
    )
}

export default AppleTvAppSection
