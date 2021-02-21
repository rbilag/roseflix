const API_KEY = process.env.REACT_APP_API_KEY;

export const SECTIONS = {
	movies: {
		general: [
			{ title: 'Trending', endpoint: `/trending/movie/week?api_key=${API_KEY}` },
			{ title: 'Popular', endpoint: `/movie/popular?api_key=${API_KEY}` },
			{ title: 'Top Rated', endpoint: `/movie/top_rated?api_key=${API_KEY}` },
			{ title: 'Upcoming', endpoint: `/movie/upcoming?api_key=${API_KEY}` }
		],
		genres: [
			{ title: 'Action', endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=28` },
			{ title: 'Adventure', endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=12` },
			{ title: 'Animation', endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=16` },
			{ title: 'Comedy', endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=35` },
			{ title: 'Crime', endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=80` },
			{ title: 'Documentary', endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=99` },
			{ title: 'Drama', endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=18` },
			{ title: 'Family', endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=10751` },
			{ title: 'Fantasy', endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=14` },
			{ title: 'History', endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=36` },
			{ title: 'Horror', endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=27` },
			{ title: 'Music', endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=10402` },
			{ title: 'Mystery', endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=9648` },
			{ title: 'Romance', endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=10749` },
			{ title: 'Sci-Fi', endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=878` },
			{ title: 'TV', endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=10770` },
			{ title: 'Thriller', endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=53` },
			{ title: 'War', endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=10752` },
			{ title: 'Western', endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=37` }
		],
		helpers: {
			fetchMovieGenres: `genre/movie/list?api_key=${API_KEY}`,
			fetchMovieVideos: `/movie/{{movie_id}}/videos?api_key=${API_KEY}`,
			fetchMovieDetails: `/movie/{{movie_id}}?api_key=${API_KEY}`
		}
	},
	series: {
		general: [
			{ title: 'Trending', endpoint: `/trending/tv/week?api_key=${API_KEY}` },
			{ title: 'Popular', endpoint: `/tv/popular?api_key=${API_KEY}` },
			{ title: 'Top Rated', endpoint: `/tv/top_rated?api_key=${API_KEY}` },
			{ title: 'Latest', endpoint: `/tv/latest?api_key=${API_KEY}` },
			{ title: 'Netflix Original', endpoint: `/discover/tv?api_key=${API_KEY}&with_networks=213` }
		],
		genres: [
			{ title: 'Action Adventure', endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=10759` },
			{ title: 'Animation', endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=16` },
			{ title: 'Comedy', endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=35` },
			{ title: 'Crime', endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=80` },
			{ title: 'Documentary', endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=99` },
			{ title: 'Drama', endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=18` },
			{ title: 'Family', endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=10751` },
			{ title: 'Kids', endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=10762` },
			{ title: 'Mystery', endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=9648` },
			{ title: 'News', endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=10763` },
			{ title: 'Reality', endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=10764` },
			{ title: 'Sci-Fi & Fantasy', endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=10765` },
			{ title: 'Soap', endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=10766` },
			{ title: 'Talk', endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=10767` },
			{ title: 'War Politics', endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=10768` },
			{ title: 'Western', endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=37` }
		],
		helpers: {
			fetchTVGenres: `genre/tv/list?api_key=${API_KEY}`,
			fetchTVVideos: `/tv/{{tv_id}}/videos?api_key=${API_KEY}`,
			fetchTVDetails: `/tv/{{tv_id}}?api_key=${API_KEY}`
		}
	}
};
