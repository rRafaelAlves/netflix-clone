export type FeatureMovieType = {
    name: string
    number_of_seasons: number
    number_of_episodes: number
    id: number
    overview: string
    poster_path: string
    popularity: number
    vote_average: number
    genres: Genre[]
    first_air_date: string
    backdrop_path: string
}

export type Genre = {
    id: number
    name: string
}