import React, { useEffect, useState } from 'react'
import MovieItem from './MovieItem'

const MovieList = ({ movies, moved }) => {
    const [translateXValue, setTranslateXValue] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if (Math.abs(translateXValue) >= 250 * 40 - 40) {
                setTranslateXValue(0)
            } else {
                setTranslateXValue(translateXValue - 2)
            }
        }, [100])

        return () => clearInterval(interval)
    }, [translateXValue])

    return (
        <div>
            <div
                style={{ transform: `translateX(${translateXValue}px)` }}
                className={`flex flex-nowrap  gap-10 py-4 transition-transform`}
            >
                {movies.map((movie, idx) => (
                    <MovieItem key={idx} bgUrl={movie} />
                ))}
            </div>
        </div>
    )
}

export default MovieList
