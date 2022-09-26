import React from 'react'
import MovieList from './MovieList'
import { MOVIE_LIST_1, MOVIE_LIST_2 } from '../../../constants/movieData'

const MovingMovieSection = () => {
    return (
        <div className="py-14  overflow-x-hidden">
            <div className="translate-x-9 xl:translate-x-24">
                <MovieList movies={MOVIE_LIST_1} />
            </div>
            <MovieList movies={MOVIE_LIST_2} />
            <div className="text-center mt-7">
                <button className="border-[1px] border-white py-3 px-6 text-white font-bold rounded-3xl">
                    See full lineup {'>'}
                </button>
            </div>
        </div>
    )
}

export default MovingMovieSection
