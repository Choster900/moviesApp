import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { PopularMoviesAndTopRatedResponse } from "../../../infraestructure/interfaces/movie-db-response";
import { MovieMapper } from "../../../infraestructure/mappers/movie.maper";
import { Movie } from "../../entities/movie.entity";


export const moviesPopulargUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {

    try {

        const pupularMovies = await fetcher.get<PopularMoviesAndTopRatedResponse>('/popular')

        //return pupularMovies.results.map( result => MovieMapper.fromMovieDBResultToEntity(result))

        return pupularMovies.results.map(MovieMapper.fromMovieDBResultToEntity)

    } catch (error) {
        throw new Error(`Error fetching popular movies: ${error instanceof Error ? error.message : error}`);

    }

}
