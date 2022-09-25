import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll } from 'framer-motion'
import OfferSection from './OfferSection'

const HeroSection = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end end'],
    })

    return (
        <div className="relative pb-20">
            <div className="h-[100vh] sticky top-0 left-0 w-full -z-10 opacity-90">
                <Image
                    className="object-cover"
                    layout="fill"
                    alt="image"
                    src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1159&q=80"
                />
            </div>
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
                    <h2 className="text-4xl font-extrabold  text-white">
                        <p>
                            All Apple Originals.
                            <br />
                            Only on&nbsp;Apple&nbsp;TV+.
                        </p>
                    </h2>
                    <div className="mt-16 text-gray-300 font-semibold">
                        Watch on the Tv app
                    </div>
                    <ul className="font-bold text-white text-[28px] flex flex-col gap-12">
                        <li>New Apple&nbsp;Originals every&nbsp;month.</li>
                        <li>
                            Stream on the Apple&nbsp;TV&nbsp;app on Apple
                            devices, smart&nbsp;TVs, consoles, or&nbsp;sticks.
                        </li>
                        <li>Share Apple&nbsp;TV+ with your&nbsp;family.</li>
                    </ul>
                </section>
                <OfferSection />
            </motion.div>
        </div>
    )
}

export default HeroSection
