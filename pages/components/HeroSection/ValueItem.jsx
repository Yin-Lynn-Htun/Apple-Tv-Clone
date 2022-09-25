import { useInView } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

const ValueItem = ({ text }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {
        margin: '0px 0px -100px 0px',
        amount: 'all',
    })

    return (
        <li
            ref={ref}
            style={{
                transform: isInView ? 'translateY(0px)' : 'translateY(100px)',
                opacity: isInView ? 1 : 0,
                transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
            }}
            className="leading-9"
        >
            {text}
        </li>
    )
}

export default ValueItem
