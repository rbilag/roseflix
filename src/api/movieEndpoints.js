const API_KEY = process.env.REACT_APP_API_KEY;
export const endpoints = {
	movies: {
		fetchTrendingMovies: `/trending/movie/week?api_key=${API_KEY}`,
		fetchPopularMovies: `/movie/popular?api_key=${API_KEY}`,
		fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}`,
		fetchUpcomingMovies: `/movie/upcoming?api_key=${API_KEY}`,
		fetchMovieVideos: `/movie/{{movie_id}}/videos?api_key=${API_KEY}`,
		fetchMovieDetails: `/movie/{{movie_id}}?api_key=${API_KEY}`,
		genres: {
			fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
			fetchAdventureMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
			fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
			fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
			fetchCrimeMovies: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
			fetchDocumentaryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
			fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
			fetchFamilyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
			fetchFantasyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
			fetchHistoryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
			fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
			fetchMusicMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10402`,
			fetchMysteryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
			fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
			fetchSciFiMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
			fetchTVMovieMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
			fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
			fetchWarMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10752`,
			fetchWesternMovies: `/discover/movie?api_key=${API_KEY}&with_genres=37`
		}
	},
	series: {
		fetchTrendingSeries: `/trending/tv/week?api_key=${API_KEY}`,
		fetchPopularSeries: `/tv/popular?api_key=${API_KEY}`,
		fetchTopRatedSeries: `/tv/top_rated?api_key=${API_KEY}`,
		fetchLatestSeries: `/tv/latest?api_key=${API_KEY}`,
		fetchNetflixOriginalSeries: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
		fetchTVVideos: `/tv/{{tv_id}}/videos?api_key=${API_KEY}`,
		fetchTVDetails: `/tv/{{tv_id}}?api_key=${API_KEY}`,
		genres: {
			fetchActionAdventureSeries: `/discover/tv?api_key=${API_KEY}&with_genres=10759`,
			fetchAnimationSeries: `/discover/tv?api_key=${API_KEY}&with_genres=16`,
			fetchComedySeries: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
			fetchCrimeSeries: `/discover/tv?api_key=${API_KEY}&with_genres=80`,
			fetchDocumentarySeries: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
			fetchDramaSeries: `/discover/tv?api_key=${API_KEY}&with_genres=18`,
			fetchFamilySeries: `/discover/tv?api_key=${API_KEY}&with_genres=10751`,
			fetchKidsSeries: `/discover/tv?api_key=${API_KEY}&with_genres=10762`,
			fetchMysterySeries: `/discover/tv?api_key=${API_KEY}&with_genres=9648`,
			fetchNewsSeries: `/discover/tv?api_key=${API_KEY}&with_genres=10763`,
			fetchRealitySeries: `/discover/tv?api_key=${API_KEY}&with_genres=10764`,
			fetchSciFiFantasySeries: `/discover/tv?api_key=${API_KEY}&with_genres=10765`,
			fetchSoapSeries: `/discover/tv?api_key=${API_KEY}&with_genres=10766`,
			fetchTalkSeries: `/discover/tv?api_key=${API_KEY}&with_genres=10767`,
			fetchWarPoliticsSeries: `/discover/tv?api_key=${API_KEY}&with_genres=10768`,
			fetchWesternSeries: `/discover/tv?api_key=${API_KEY}&with_genres=37`
		}
	},
	genres: {
		fetchMovieGenres: `genre/movie/list?api_key=${API_KEY}`,
		fetchTVGenres: `genre/tv/list?api_key=${API_KEY}`
	}
};
