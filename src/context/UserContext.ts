import { User } from './../constants/types';
import { createContext, useContext } from 'react';

export type UserContextType = {
	userDetails: User | null;
	setUserDetails: (userDetails: User | null | undefined) => void;
};

export const UserContext = createContext<UserContextType>({
	userDetails: null,
	setUserDetails: () => {}
});

export const useUser = () => useContext(UserContext);
