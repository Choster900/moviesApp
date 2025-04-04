import { useEffect, useState } from "react"
import { Movie } from "../../core/entities/movie.entity"
import * as movieUseCases from "../../core/use-cases"
import { movieDbFetcher } from "../../config/adapters/movieDb.adapter"


let popularPageNumber = 1

export const useMovies = () => {

    const [nowPlaying, setNowPlaying] = useState<Movie[]>([])
    const [popular, setPopular] = useState<Movie[]>([])
    const [upcoming, setUpcoming] = useState<Movie[]>([])
    const [topRated, setTopRated] = useState<Movie[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        initialLoad()
    }, [])

    const initialLoad = async () => {
        try {
            const [
                nowPlayingMovies,
                popularMovies,
                upcomingMovies,
                topRatedMovies,
            ] = await Promise.all([
                movieUseCases.moviesNowPlayingUseCase(movieDbFetcher),
                movieUseCases.moviesPopulargUseCase(movieDbFetcher),
                movieUseCases.upCommingPlayingUseCase(movieDbFetcher),
                movieUseCases.topRatedMoviesUseCase(movieDbFetcher),
            ])

            setNowPlaying(nowPlayingMovies)
            setPopular(popularMovies)
            setUpcoming(upcomingMovies)
            setTopRated(topRatedMovies)

        } catch (error) {
            console.error("Error fetching movies:", error)
        } finally {
            setIsLoading(false)
        }
    }

    return {
        isLoading,
        nowPlaying,
        popular,
        upcoming,
        topRated,


        //Methods
        popularNextPage: async () => {
            popularPageNumber++
            const popularMovies = await movieUseCases.moviesPopulargUseCase(movieDbFetcher,
                {
                    page: popularPageNumber
                }
            )
            setPopular([...popular, ...popularMovies])
        }

    }
}
