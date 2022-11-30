import { FeatureMovieType } from "./types/FeatureMovie";

const API_KEY: string = '93e510915faa953066e4f21053b19c33';
const API_BASE: string = "https://api.themoviedb.org/3";
let info : FeatureMovieType = {
    name: '',
    genres:[{name: '', id: 0}],
    first_air_date: '', number_of_episodes: 0,
    overview: '',
    id: 0,
    number_of_seasons: 0,
    popularity: 0,
    poster_path: '',
    vote_average: 0,
    backdrop_path: ''
}

const basicFetch = async (endpoint:string)=>{
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();

    return json
}


export default {
    getHomeList: async() =>{
        return[
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendamos para você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Originais do Netflix',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentário',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ];
    },
    
    getMovieInfo: async (movieId: number, type: string)=>{
        

        if(movieId){
            switch(type){
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;

                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                default:
                    return;              
            }
            return info;
        }
    }
    
}