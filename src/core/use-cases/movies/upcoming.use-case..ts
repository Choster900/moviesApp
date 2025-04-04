import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieGeneralResponse } from '../../../infraestructure/interfaces/movie-db-response';
import { MovieMapper } from "../../../infraestructure/mappers/movie.maper";
import type { Movie } from "../../entities/movie.entity";

export const upCommingPlayingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {

    try {

        const nowPlaying = await fetcher.get<MovieGeneralResponse>('/upcoming')

        if (!nowPlaying) {
            throw new Error('Failed to fetch now playing movies');
        }

        //return nowPlaying.results.map( result => MovieMapper.fromMovieDBResultToEntity(result))
        return nowPlaying.results.map(  MovieMapper.fromMovieDBResultToEntity )

    } catch (error) {
        throw new Error(`Error fetching now playing movies: ${error instanceof Error ? error.message : error}`);
    }

}
