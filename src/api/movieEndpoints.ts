const API_KEY = process.env.REACT_APP_API_KEY;

export type SectionType = { title: string; endpoint: string; size?: string };
type Sections = {
	[key: string]: {
		sections: Array<SectionType>;
		helpers: { [key: string]: string };
	};
};

export const SECTIONS: Sections = {
	movies: {
		sections: [
			{ title: 'Popular on Roseflix', endpoint: `/movie/popular?api_key=${API_KEY}` },
			{
				title: 'Romance',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=10749&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Music',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=10402&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Sci-Fi',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=878&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Roseflix Original',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_networks=213&with_watch_providers=8&watch_region=PH`,
				size: 'lg'
			},
			{
				title: 'Drama',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=18&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Fantasy',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=14&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Crime',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=80&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Mystery',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=9648&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Action',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=28&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Comedy',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=35&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Animation',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=16&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Adventure',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=12&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Family',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=10751&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'TV',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=10770&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Documentary',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=99&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'War',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=10752&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'History',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=36&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Western',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=37&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Thriller',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=53&with_watch_providers=8&watch_region=PH`
			}
		],
		helpers: {
			searchMovie: `/search/movie?api_key=${API_KEY}&query={{query}}`,
			fetchMovieGenres: `genre/movie/list?api_key=${API_KEY}`,
			fetchMovieVideos: `/movie/{{movie_id}}/videos?api_key=${API_KEY}`,
			fetchMovieDetails: `/movie/{{movie_id}}?api_key=${API_KEY}`,
			fetchMovieRecommendations: `/movie/{{movie_id}}/recommendations?api_key=${API_KEY}`,
			fetchMovieCredits: `/movie/{{movie_id}}/credits?api_key=${API_KEY}`
		}
	},
	series: {
		sections: [
			{ title: 'Popular on Roseflix', endpoint: `/tv/popular?api_key=${API_KEY}` },
			{
				title: 'War Politics',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=10768&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Sci-Fi & Fantasy',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=10765&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Documentary',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=99&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Roseflix Original',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_networks=213&with_watch_providers=8&watch_region=PH`,
				size: 'lg'
			},
			{
				title: 'Comedy',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=35&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Animation',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=16&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Drama',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=18&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Family',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=10751&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Mystery',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=9648&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Action-Adventure',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=10759&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Crime',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=80&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reality',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=10764&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Soap',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=10766&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Talk',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=10767&with_watch_providers=8&watch_region=PH`
			}
		],
		helpers: {
			searchTV: `/search/tv?api_key=${API_KEY}&query={{query}}`,
			fetchTVGenres: `genre/tv/list?api_key=${API_KEY}`,
			fetchTVVideos: `/tv/{{tv_id}}/videos?api_key=${API_KEY}`,
			fetchTVDetails: `/tv/{{tv_id}}?api_key=${API_KEY}`,
			fetchTVAggregateCredits: `/tv/{{tv_id}}/aggregate_credits?api_key=${API_KEY}`,
			fetchTVRecommendations: `/tv/{{tv_id}}/recommendations?api_key=${API_KEY}`,
			fetchTVSeason: `/tv/{{tv_id}}/season/{{season_number}}?api_key=${API_KEY}`
		}
	}
};
