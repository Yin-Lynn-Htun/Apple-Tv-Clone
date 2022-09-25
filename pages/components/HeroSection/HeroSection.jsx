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
            textRef.current.style.opacity = 1 - latest
        })
    }, [textScrollProgress])

    return (
        <div className="relative pb-20">
            <div className="h-[calc(100vh-47px)] sticky top-[47px] left-0 w-full -z-10 opacity-90">
                <Image
                    className="object-cover"
                    layout="fill"
                    alt="image"
                    src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/hero_startframe__fs1yactuf3qm_small.jpg"
                />
            </div>
            <motion.div
                ref={textRef}
                className="absolute top-[57vh] left-0 px-6"
            >
                <h2 className="text-[40px] leading-[44px] font-extrabold  text-white">
                    <p>
                        All Apple Originals. {/* <br class="large" /> */}
                        Only on&nbsp;Apple&nbsp;TV+.
                    </p>
                </h2>
                <div className="mt-16 text-gray-300 font-semibold">
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
                className="h-screen w-full absolute top-[80vh]"
            ></motion.div>
            <motion.div
                className=" w-full absolute -z-10 top-0 left-0 right-0 h-full bg-black"
                style={{ opacity: scrollYProgress }}
            ></motion.div>
            <motion.div>
                <section className="px-6 relative">
                    <ul className="font-bold text-white text-[28px] flex flex-col gap-12">
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
    )
}

export default HeroSection
