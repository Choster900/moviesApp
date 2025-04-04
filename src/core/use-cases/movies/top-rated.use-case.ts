import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { PopularMoviesAndTopRatedResponse } from '../../../infraestructure/interfaces/movie-db-response';
import { MovieMapper } from "../../../infraestructure/mappers/movie.maper";
import type { Movie } from "../../entities/movie.entity";


export const topRatedMoviesUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {

    try {

        const upcoming = await fetcher.get<PopularMoviesAndTopRatedResponse>('/upcoming')

        if (!upcoming) {
            throw new Error('Failed to fetch now playing movies');
        }

        //return nowPlaying.results.map( result => MovieMapper.fromMovieDBResultToEntity(result))
        return upcoming.results.map(MovieMapper.fromMovieDBResultToEntity)




    } catch (error) {
        throw new Error(`Error fetching topRated movies: ${error instanceof Error ? error.message : error}`);
    }

}
