/* eslint-disable @next/next/no-img-element */
import React from 'react'

const AppleMusicSection = () => {
    return (
        <section className="bg-gray-100 mt-4">
            <div className="py-11 flex flex-col justify-center items-center gap-4">
                <p className="text-[28px] font-semibold leading-[30px] text-center py-3 ">
                    The&nbsp;Apple&nbsp;Music Student <br className="small" />
                    Plan comes with <br className="small" />
                    Apple&nbsp;TV+ for&nbsp;free.
                    <sup className="footnote footnote-number">
                        <a href="#footnote-4" aria-label="Footnote 3">
                            3
                        </a>
                    </sup>
                </p>
                <button className="mx-auto my-5 bg-black text-white font-bold px-5 py-3 rounded-3xl  ">
                    Try Apple Music free
                </button>
                <img
                    className="w-[300px]"
                    src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/student_plan__bm7yp0v4tf6u_small_2x.jpg"
                    alt="apple tv plus"
                />
            </div>
        </section>
    )
}

export default AppleMusicSection
