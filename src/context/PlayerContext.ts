import { createContext, useContext } from 'react';
import { DetailsTrailer, Genre, ShowOverview, TrailerDisplayed } from '../constants/types';

export type PlayerContextType = {
	playing: {
		playing: ShowOverview | null | undefined;
		setPlaying: (playing?: ShowOverview | null | undefined) => void;
	};
	detailsTrailer: {
		detailsTrailer: DetailsTrailer | null | undefined;
		setDetailsTrailer: (detailsTrailer?: any) => void;
	};
	isMuted: {
		isMuted: boolean;
		setIsMuted: (isMuted: boolean) => void;
	};
	category: {
		category: string;
		setCategory: (category: string) => void;
	};
	heroTrailer: {
		heroTrailer: string | null | undefined;
		setHeroTrailer: (heroTrailer?: string | null | undefined) => void;
	};
	trailerDisplayed: {
		trailerDisplayed: TrailerDisplayed | null | undefined;
		setTrailerDisplayed: (trailerDisplayed: TrailerDisplayed | null | undefined) => void;
	};
	genres: {
		genres: Array<Genre> | undefined | null;
		setGenres: (genres?: Array<Genre> | undefined | null) => void;
	};
};

export const PlayerContext = createContext<PlayerContextType>({
	playing: {
		playing: undefined,
		setPlaying: () => {}
	},
	detailsTrailer: {
		detailsTrailer: null,
		setDetailsTrailer: () => {}
	},
	isMuted: {
		isMuted: true,
		setIsMuted: () => {}
	},
	category: {
		category: 'series',
		setCategory: () => {}
	},
	heroTrailer: {
		heroTrailer: null,
		setHeroTrailer: () => {}
	},
	trailerDisplayed: {
		trailerDisplayed: null,
		setTrailerDisplayed: () => {}
	},
	genres: {
		genres: null,
		setGenres: () => {}
	}
});

export const usePlayer = () => useContext(PlayerContext);
