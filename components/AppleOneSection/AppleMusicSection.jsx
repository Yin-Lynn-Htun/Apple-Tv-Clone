/* eslint-disable @next/next/no-img-element */
import React from 'react'

const AppleMusicSection = () => {
    return (
        <section className="bg-gray-100 mt-4 md:mx-12 lg:mx-0">
            <div className="py-11 lg:pb-0 xl:pt-28 flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="flex flex-col justify-center items-center gap-4 md:basis-1/2">
                    <p className="text-[28px] md:text-2xl xl:text-[40px] 2xl:text-[48px] md:basis-1/2 font-semibold leading-[30px] xl:leading-[43px] 2xl:leading-[50px] text-center py-3 ">
                        The&nbsp;Apple&nbsp;Music Student{' '}
                        <br className="small" />
                        Plan comes with <br className="small" />
                        Apple&nbsp;TV+ for&nbsp;free.
                        <sup className="footnote footnote-number">
                            <a href="#footnote-4" aria-label="Footnote 3">
                                3
                            </a>
                        </sup>
                    </p>
                    <button className="mx-auto my-5 md:my-2 bg-black text-white font-bold px-5 py-3 rounded-3xl  ">
                        Try Apple Music free
                    </button>
                </div>
                <div className="md:basis-1/2 md:grid md:place-items-center">
                    <img
                        className="w-[300px] xl:w-[533px]"
                        src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/student_plan__bm7yp0v4tf6u_small_2x.jpg"
                        alt="apple tv plus"
                    />
                </div>
            </div>
        </section>
    )
}

export default AppleMusicSection
