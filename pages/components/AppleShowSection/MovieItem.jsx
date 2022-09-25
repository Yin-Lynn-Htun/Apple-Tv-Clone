import React from 'react'

const MovieItem = ({ bgUrl }) => {
    return (
        <div
            style={{ backgroundImage: `url("${bgUrl}")` }}
            className="min-w-[210px] h-28 rounded-lg bg-movie1 bg-cover grid place-items-center"
        >
            <div className="opacity-0 hover:opacity-100">
                <button className="bg-white py-2 px-4 flex gap-4 text-sm rounded-3xl font-semibold">
                    <p>Stream now</p>
                    <div className="w-5 h-5 rounded-full bg-black"></div>
                </button>
            </div>
        </div>
    )
}

export default MovieItem
