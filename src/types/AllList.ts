export type CategoryMovies = {
    slug: string
    title: string
    items: items
}



export type Results = {
    title: string;
    poster_path: string;
    genre: string[];
    original_title: string;
    adult: boolean;
}

export type items = {
	page: number;
	results: Results[]
}