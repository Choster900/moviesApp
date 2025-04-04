import { useEffect, useState } from "react"
import { Movie } from "../../core/entities/movie.entity"
import {
    moviesNowPlayingUseCase as fetchNowPlayingMovies,
    moviesNowPlayingUseCase as fetchPopularMovies,
    upCommingPlayingUseCase as fetchUpcomingMovies,
    topRatedMoviesUseCase as fetchTopRatedMovies
} from "../../core/use-cases"
import { movieDbFetcher } from "../../config/adapters/movieDb.adapter"

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
                fetchNowPlayingMovies(movieDbFetcher),
                fetchPopularMovies(movieDbFetcher),
                fetchUpcomingMovies(movieDbFetcher),
                fetchTopRatedMovies(movieDbFetcher),
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
        topRated
    }
}
