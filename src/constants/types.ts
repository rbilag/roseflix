export interface Profile {
	_id?: string;
	name: string;
	avatar: string;
}

export interface User {
	_id: string;
	email: string;
	phone: string;
	profiles?: Array<Profile>;
}

export interface ShowOverview {
	id: number;
	overview: string;
	poster_path: string | null;
	backdrop_path: string | null;
	genre_ids: Array<number>;
	popularity: number;
	vote_average: number;
	vote_count: number;
	original_language: string;
	original_title?: string;
	title?: string;
	origin_country?: Array<string>;
	name?: string;
	original_name?: string;
	[x: string]: any;
}

export interface ShowDetails extends ShowOverview {
	genres: Array<{ id: number; name: string }>;
	created_by?: Array<{ id: number; credit_id: string; name: string; gender: number; profile_path: string | null }>;
	episode_run_time?: Array<number>;
	number_of_episodes?: number;
	[x: string]: any;
}

export interface Season {
	air_date: string;
	episode_count: number;
	id: number;
	name: string;
	overview: string;
	poster_path: string;
	season_number: number;
}

export interface Cast {
	name: string;
	[x: string]: any;
}

export interface Episode {
	id: number;
	episode_number: number;
	name: string;
	overview: string;
	still_path: string;
	[x: string]: any;
}

export interface Video {
	id: string;
	iso_639_1: string;
	iso_3166_1: string;
	key: string;
	name: string;
	site: string;
	size: number;
	type: string;
}

export interface Genre {
	id: number;
	name: string;
}

export interface DetailsTrailer {
	id: string;
	key: string | null;
	start: number;
}
export interface TrailerDisplayed {
	id: string;
	header: string;
	url: string | null;
	isLoaded: boolean;
}

export type ComponentProp = {
	children?: any;
	[x: string]: any;
};
