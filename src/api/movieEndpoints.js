const API_KEY = process.env.REACT_APP_API_KEY;

export const SECTIONS = {
	movies: {
		sections: [
			{ title: 'Popular on Roseflix', endpoint: `/movie/popular?api_key=${API_KEY}` },
			{ title: 'Romance', endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=10749` },
			{ title: 'Music', endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=10402` },
			{ title: 'Sci-Fi', endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=878` },
			{ title: 'Roseflix Original', endpoint: `/discover/movie?api_key=${API_KEY}&with_networks=213`, size: 'lg' },
			{ title: 'Drama', endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=18` },
			{ title: 'Fantasy', endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=14` },
			{ title: 'Crime', endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=80` },
			{ title: 'Mystery', endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=9648` },
			{ title: 'Action', endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=28` },
			{ title: 'Comedy', endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=35` },
			{ title: 'Animation', endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=16` },
			{ title: 'Adventure', endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=12` },
			{ title: 'Family', endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=10751` },
			{ title: 'TV', endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=10770` },
			{ title: 'Documentary', endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=99` },
			{ title: 'War', endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=10752` },
			{ title: 'History', endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=36` },
			{ title: 'Western', endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=37` },
			{ title: 'Thriller', endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=53` }
		],
		helpers: {
			fetchMovieGenres: `genre/movie/list?api_key=${API_KEY}`,
			fetchMovieVideos: `/movie/{{movie_id}}/videos?api_key=${API_KEY}`,
			fetchMovieDetails: `/movie/{{movie_id}}?api_key=${API_KEY}`,
			fetchMovieRecommendations: `/movie/{{movie_id}}/recommendations?api_key=${API_KEY}`,
			fetchMovieSimilar: `/movie/{{movie_id}}/similar?api_key=${API_KEY}`,
			fetchMovieCredits: `/movie/{{movie_id}}/credits?api_key=${API_KEY}`
		}
	},
	series: {
		sections: [
			{ title: 'Popular on Roseflix', endpoint: `/tv/popular?api_key=${API_KEY}` },
			{ title: 'War Politics', endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=10768` },
			{ title: 'Sci-Fi & Fantasy', endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=10765` },
			{ title: 'Documentary', endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=99` },
			{ title: 'Roseflix Original', endpoint: `/discover/tv?api_key=${API_KEY}&with_networks=213`, size: 'lg' },
			{ title: 'Comedy', endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=35` },
			{ title: 'Animation', endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=16` },
			{ title: 'Drama', endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=18` },
			{ title: 'Family', endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=10751` },
			{ title: 'Western', endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=37` },
			{ title: 'Mystery', endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=9648` },
			{ title: 'Reality', endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=10764` },
			{ title: 'News', endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=10763` },
			{ title: 'Soap', endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=10766` },
			{ title: 'Talk', endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=10767` }
		],
		helpers: {
			fetchTVGenres: `genre/tv/list?api_key=${API_KEY}`,
			fetchTVVideos: `/tv/{{tv_id}}/videos?api_key=${API_KEY}`,
			fetchTVDetails: `/tv/{{tv_id}}?api_key=${API_KEY}`,
			fetchTVAggregateCredits: `/tv/{{tv_id}}/aggregate_credits?api_key=${API_KEY}`,
			fetchTVCredits: `/tv/{{tv_id}}/credits?api_key=${API_KEY}`,
			fetchTVRecommendations: `/tv/{{tv_id}}/recommendations?api_key=${API_KEY}`,
			fetchTVSimilar: `/tv/{{tv_id}}/similar?api_key=${API_KEY}`,
			fetchTVSeason: `/tv/{{tv_id}}/season/{{season_number}}?api_key=${API_KEY}`
		}
	}
};
