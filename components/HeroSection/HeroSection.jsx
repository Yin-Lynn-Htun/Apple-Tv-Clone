/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useInView } from 'framer-motion'
import OfferSection from './OfferSection'
import ValueItem from './ValueItem'

const HeroSection = () => {
    const ref = useRef(null)
    const isInView = useInView(ref)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end end'],
    })

    const textRef = useRef(null)
    const { scrollYProgress: textScrollProgress } = useScroll({
        target: textRef,
        offset: ['start 70vh', 'start 10vh'],
    })

    useEffect(() => {
        return textScrollProgress.onChange((latest) => {
            // textRef.current.style.opacity = 1 - latest
        })
    }, [textScrollProgress])

    return (
        <div className="relative pb-20 ">
            <div className="h-[calc(100vh-47px)] sticky top-[47px] left-0 w-full -z-10 opacity-90">
                <Image
                    className="object-cover md:hidden"
                    layout="fill"
                    alt="image"
                    src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/hero_startframe__fs1yactuf3qm_small.jpg"
                />
                <Image
                    className="object-cover hidden md:block lg:hidden"
                    layout="fill"
                    alt="image"
                    src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/hero_startframe__fs1yactuf3qm_medium.jpg"
                />
                <Image
                    className="object-cover hidden lg:block"
                    layout="fill"
                    alt="image"
                    src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/hero_startframe__fs1yactuf3qm_large.jpg "
                />
            </div>
            <div className="mx-6 md:mx-9">
                <motion.div
                    ref={textRef}
                    className="absolute top-[57vh] md:top-[30vh] left-0 mx-6 lg:mx-0 md:px-9 lg:px-0 lg:w-[720px] lg:left-[50%] lg:-translate-x-1/2 xl:w-[980px] xl:top-[40vh] 2xl:w-[90%] 2xl:bottom-[50px]"
                >
                    <h2 className="text-[40px] md:text-[72px] xl:text-[80px] 2xl:text-[96px] spacing tracking-tight leading-[44px] md:leading-[76px] xl:leading-[85px] 2xl:leading-[100px] font-extrabold  text-white ">
                        <p>
                            All Apple Originals.
                            <br className="hidden xl:block" />
                            Only on&nbsp;Apple&nbsp;TV+.
                        </p>
                    </h2>
                    <div>
                        <button className="hidden md:block rounded-full bg-white text-black mt-6 px-[31px] py-[18px] text-sm 2xl:text-[17px] font-semibold">
                            Stream Now
                        </button>
                    </div>
                    <div className="mt-16 text-gray-300 md:text-white text-lg font-semibold md:mt-20">
                        Watch on the{' '}
                        <img
                            className="w-10 h-10 inline-block"
                            src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/hero_icon__gpaz9xyhw0uq_large_2x.png"
                            alt="Logo"
                        />{' '}
                        app
                    </div>
                </motion.div>
                <motion.div
                    ref={ref}
                    className="h-screen  absolute top-[80vh]"
                ></motion.div>
                <motion.div
                    className="w-full absolute -z-10 top-0 left-0 right-0 h-full bg-black"
                    style={{ opacity: scrollYProgress }}
                ></motion.div>
                <motion.div>
                    <section className="relative">
                        <ul className="font-bold text-white text-[28px] md:text-[40px] xl:text-[48px] 2xl:text-[64px] flex flex-col gap-12">
                            <ValueItem text="New Apple Originals every month." />
                            <ValueItem
                                text="Stream on the Apple TV app on Apple
                            devices, smart TVs, consoles, or sticks."
                            />
                            <ValueItem text="Share Apple TV+ with your family." />
                        </ul>
                    </section>
                    <OfferSection />
                </motion.div>
            </div>
        </div>
    )
}

export default HeroSection
