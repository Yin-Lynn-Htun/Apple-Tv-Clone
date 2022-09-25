import { useInView } from 'framer-motion'
import React, { useRef } from 'react'

const ValueItem = ({ text }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { margin: '0px 0px -200px 0px' })

    return (
        <li
            ref={ref}
            style={{
                transform: isInView ? 'translateY(0px)' : 'translateY(150px)',
                opacity: isInView ? 1 : 0,
                transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
            }}
        >
            {text}
        </li>
    )
}

export default ValueItem
