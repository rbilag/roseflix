export const PLAYER_CONFIG = {
	youtube: {
		playerVars: {
			disablekb: 1,
			iv_load_policy: 3,
			origin: 'http://localhost:3000',
			widget_referrer: 'http://localhost:3000'
		}
	}
};

export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';
export const IMAGE_SIZES = {
	backdrop: {
		small: 'w300',
		xmedium: 'w780',
		medium: 'w1280',
		large: 'original'
	},
	poster: {
		small: 'w154',
		medium: 'w185',
		large: 'w342'
	},
	still: {
		small: 'w92'
	}
};
export const BACKDROP_PLACEHOLDER = 'https://plchldr.co/i/300x169?bg=333333&text=ROSEFLIX';
export const POSTER_PLACEHOLDER = 'https://plchldr.co/i/342x513?bg=333333&text=ROSEFLIX';
export const STILL_PLACEHOLDER = 'https://plchldr.co/i/185x104?bg=333333&text=ROSEFLIX';

export const HEADER_LINKS = [
	{
		title: 'TV Shows',
		value: 'series'
	},
	{
		title: 'Movies',
		value: 'movies'
	}
];
