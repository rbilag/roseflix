import { createContext, useContext } from 'react';

export const UserContext = createContext({
	userDetails: null,
	setUserDetails: () => {}
});

export const useUser = () => useContext(UserContext);
