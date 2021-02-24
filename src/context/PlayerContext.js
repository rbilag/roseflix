import { createContext, useContext } from 'react';

export const PlayerContext = createContext({
	playing: null,
	setPlaying: () => {}
});

export const usePlayer = () => useContext(PlayerContext);
