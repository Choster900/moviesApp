import { AxiosAdapter } from "./http/axios.adapter";


export const movieDbFetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '8636e4539801e9a068075e87495234cb',
        language: 'es'
    }
})
