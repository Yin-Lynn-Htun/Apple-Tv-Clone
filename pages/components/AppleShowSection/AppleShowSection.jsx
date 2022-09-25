import React, { useEffect, useRef, useState } from 'react'
import { useInView, motion, useScroll } from 'framer-motion'
import useWindowDimensions from '../../hooks/useWindowDimension'

const AppleShowSection = () => {
    const viewRef = useRef(null)
    const scrollRef = useRef(null)
    const isInView = useInView(viewRef, { amount: 1 })
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ['start end', 'end end'],
    })
    const { height, width } = useWindowDimensions()
    const [imageScale, setImageScale] = useState({})

    useEffect(() => {
        if (width && height) {
            // where width is the document widht
            // 280 is image width
            setImageScale({ scaleX: width / 280, scaleY: height / 500 })
        }
    }, [width, height])

    return (
        <section className="h-[2000px]">
            <motion.div
                // style={{ transform: scrollYProgress }}
                ref={viewRef}
                className="w-full h-full bg-red-100 relative"
            >
                <div
                    style={{
                        transform: `scale(${imageScale.scaleX}, ${imageScale.scaleY})`,
                    }}
                    className="sticky top-0 left-0  w-[280px] h-[500px] bg-red-800 mx-auto "
                ></div>
                <div className="z-10">
                    <p>New Relase</p>
                    <h1>Sidney</h1>
                    <h1></h1>
                </div>
            </motion.div>
        </section>
    )
}

export default AppleShowSection
