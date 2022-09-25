/* eslint-disable @next/next/no-img-element */
import React from 'react'

const ProductItem = ({ imgSrc, item }) => {
    return (
        <div className="flex flex-col items-center justify-center basis-1/3 mb-8">
            <img className="h-12" src={imgSrc} alt="apple tv" />
            <p className="text-xs mt-2">{item}</p>
        </div>
    )
}

const AppleTvAppSection = () => {
    return (
        <section className="bg-white text-black px-6">
            <div className="text-center pt-28 pb-7">
                <img
                    className="w-[57px] h-[57px] mx-auto mb-4"
                    src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/apple_tv_app_icon__cth1s5qlqpyu_small_2x.png"
                    alt="Logo"
                />
                <h1 className="text-3xl font-bold">
                    Watch Apple&nbsp;TV+ anywhere {/* <br class="large" /> */}
                    on the Apple&nbsp;TV&nbsp;app.
                </h1>
                <p className="text-[17px] px-3 py-4">
                    Find the Apple&nbsp;TV&nbsp;app on your favorite Apple
                    devices.
                    {/* <br class="large" /> */}
                    {/* <br class="medium" /> */}
                    Or&nbsp;watch Apple&nbsp;TV+ online at{' '}
                    <a href="https://tv.apple.com/" className="text-link">
                        tv.apple.com
                    </a>
                    .
                </p>
            </div>
            <div className="flex flex-wrap justify-start mb-10">
                <ProductItem
                    imgSrc="https://www.apple.com/v/apple-tv-plus/ac/images/overview/icon_apple_tv__r2nel0gcigam_small_2x.jpg"
                    item="Apple TV"
                />
                <ProductItem
                    imgSrc="https://www.apple.com/v/apple-tv-plus/ac/images/overview/icon_iphone__c914mkstye0y_small_2x.jpg"
                    item="iPhone"
                />
                <ProductItem
                    imgSrc="https://www.apple.com/v/apple-tv-plus/ac/images/overview/icon_ipad__cyk6qow5fiqa_small_2x.jpg"
                    item="iPad"
                />
                <ProductItem
                    imgSrc="https://www.apple.com/v/apple-tv-plus/ac/images/overview/icon_mac__b7y797p7oouq_small_2x.jpg"
                    item="Mac"
                />
                <ProductItem
                    imgSrc="https://www.apple.com/v/apple-tv-plus/ac/images/overview/icon_airplay__ddkvcm0sxtm6_small_2x.jpg"
                    item="AirPlay"
                />
            </div>

            <section className="flex flex-col justify-center items-center gap-2">
                <h1 className="text-center font-semibold text-[28px]">
                    See it on your smart TV or streaming device
                </h1>
                <a className="text-link" href="#">
                    Set up your device {'>'}
                </a>
                <a className="text-link" href="#">
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
